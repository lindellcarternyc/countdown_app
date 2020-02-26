import React from 'react'

import useHoverStyles from './hooks/use-hover-styles'
import Colors from './styles/colors'

interface HoverButtonProps {
  text: string
  style?: React.CSSProperties
  onClick: () => void
}

const HoverButton: React.FC<HoverButtonProps> = ({ text, style, onClick }) => {
  const handleClick = (evt: React.SyntheticEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    evt.stopPropagation()
    return onClick()
  }
  const [ref, currentStyles] = useHoverStyles({
    styles: {
      ...style,
      backgroundColor: 'transparent',
      border: `2px solid ${Colors.DarkGrey}`,
      color: Colors.DarkGrey,
      fontSize: '1rem',
      cursor: 'pointer',
      outline: 'none'
    },
    onHover: [
      ['backgroundColor', Colors.DarkGrey],
      ['color', Colors.MediumBlue]
    ]
  })
  return (
    <button ref={ref} style={currentStyles} onClick={handleClick}>{text}</button>
  )
}

export default HoverButton