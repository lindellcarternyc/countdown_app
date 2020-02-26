import React from 'react'

import Timers from './Timers'
import HoverButton from './HoverButton'

import useTimeDiff from './hooks/use-time-diff'

interface CountdownComponentProps {
  targetDate: Date
}

const CountdownComponent: React.FC<CountdownComponentProps> = ({ targetDate }) => {
  const [time, api] = useTimeDiff(targetDate)

  const handlePlayPauseButton = () => {

    if (time.isTicking) return api.pause()
    return api.start()
  }

  return ( 
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      padding: '1rem'
    }}>
      <div style={{
        alignSelf: 'start',
        display: 'flex'
      }}>
        <HoverButton style={{ marginRight: '0.5rem'}} text="Timers" onClick={() => console.log('Timers')}/>
        <HoverButton onClick={handlePlayPauseButton} text={time.isTicking ? 'Pause' : 'Start'} />
      </div>
      <Timers
        {...time.diff}
      />
    </div>
  )
}

export default CountdownComponent