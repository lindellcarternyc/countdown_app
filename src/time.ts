export const padTime = (time: number): string => {
  return `${time < 10 ? '0' : ''}${time}`
}

export interface Time {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const DAY_FACTOR = 86400000
const HOUR_FACTOR = DAY_FACTOR / 24
const MINUTES_FACTOR = HOUR_FACTOR / 60
const SECONDS_FACTOR = MINUTES_FACTOR / 60

const getDays = (millis: number): number => {
  return Math.floor(millis / DAY_FACTOR)
}

const getHours = (millis: number, days: number): number => {
  const rest = millis - days * DAY_FACTOR
  return Math.floor(rest / HOUR_FACTOR)
}

const getMinutes = (millis: number, days: number, hours: number): number => {
  const rest = millis - ((days * DAY_FACTOR) + (hours * HOUR_FACTOR))
  return Math.floor(rest / MINUTES_FACTOR)
}

const getSeconds = (millis: number, days: number, hours: number, minutes: number): number => {
  const rest = millis - ((days * DAY_FACTOR) + (hours * HOUR_FACTOR) + (minutes * MINUTES_FACTOR))
  return Math.floor(rest / SECONDS_FACTOR)
}

export const getDifference = (start: Date, end: Date): Time  => {
  const millis1 = start.getTime()
  const millis2 = end.getTime()

  if (millis2 < millis1) {
    const zeroTime: Time = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
    return zeroTime
  }

  const diff = millis2 - millis1

  const days = getDays(diff)
  const hours = getHours(diff, days)
  const minutes = getMinutes(diff, days, hours)
  const seconds = getSeconds(diff, days, hours, minutes)

  
  return { days, hours, minutes, seconds }
}