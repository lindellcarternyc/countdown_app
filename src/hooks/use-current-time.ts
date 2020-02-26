import { useEffect, useState, useCallback } from 'react'

interface UseCurrentTimeData<T = Date> {
  time: T
  isTicking: boolean
}

interface UseCurrentTimeAPI {
  start: () => void
  pause: () => void
}

const useCurrentTime = <T = Date>(getTime: () => T, refreshCycle: number = 100): [UseCurrentTimeData<T>, UseCurrentTimeAPI] => {
  const [now, setNow] = useState(getTime())
  
  const [isTicking, setIsTicking] = useState(true)

  const start = () => setIsTicking(true)
  const pause = () => setIsTicking(false)

  const handleTick = useCallback(() => {
    if (isTicking) return setNow(getTime())
  }, [getTime, isTicking])

  useEffect(() => {
    const $interval = setInterval(
      handleTick,
      refreshCycle
    )

    return () => clearInterval($interval)
  }, [getTime, refreshCycle, isTicking, handleTick])
  return [{
    time: now,
    isTicking
  }, {
    start, pause
  }]
}

export default useCurrentTime