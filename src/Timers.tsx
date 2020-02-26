import React from 'react'
import { padTime } from './time'

interface TimeDisplayProps {
  label: string
  time: number
}
const TimeDisplay: React.FC<TimeDisplayProps> = props => {
  const time = props.label === 'Days' ? props.time : padTime(props.time)
  return (
    <div>
      <p>{time}</p>
      <p>{props.label}</p>
    </div>
  )
}

interface TimersProps {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const Timers: React.FC<TimersProps> = ({ days, hours, minutes, seconds }) => {
  const styles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-around'
  }
  return (
    <div style={{ ...styles }}>
      <TimeDisplay label="Days" time={days} />
      <TimeDisplay label="Hours" time={hours} />
      <TimeDisplay label="Minutes" time={minutes} />
      <TimeDisplay label="Seconds" time={seconds} />
    </div>
  )
} 

export default Timers