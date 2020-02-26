import React from 'react'
import Colors from './styles/colors'

const makeContentStyles = (props: {padding: number | string}): React.CSSProperties => {
  const { padding } = props 
  return {
    background: Colors.MediumBlue,
    position: 'absolute',
    top: padding,
    bottom: padding,
    left: padding,
    right: padding,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '0.5rem'
    // justifyContent: 'space-around'
  }
}

interface ContentProps {
  title: string
  children: React.ReactNode | React.ReactNode[]
  padding?: number | string
}

const Content: React.FC<ContentProps> = props => {
  const { children, padding } = props

  const styles = makeContentStyles({ padding: padding || '2rem' })

  return (
    <div style={{ ...styles }}>
      <h3 style={{
        marginTop: '3rem',
        fontSize: '2rem'
      }}>{props.title}</h3>
      {children}
    </div>
  )
}

export default Content