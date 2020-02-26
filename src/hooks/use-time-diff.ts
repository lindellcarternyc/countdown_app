import useCurrentTime from './use-current-time'
import { Time, getDifference } from '../time'

const useTimeDiff = (end: Date): [{diff: Time, isTicking: boolean}, { start: () => void, pause: () => void }] => {
  const [{ time, isTicking }, api] = useCurrentTime(() => new Date())
  const timeDiff = getDifference(time, end)
  return [{ diff: timeDiff, isTicking}, api]
}

export default useTimeDiff