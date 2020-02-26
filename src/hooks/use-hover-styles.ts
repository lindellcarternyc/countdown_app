import { CSSProperties } from 'react'
import useHover from './use-hover'

const useHoverStyles = (args: { styles: React.CSSProperties, onHover: Array<[keyof CSSProperties, string | undefined]> }): [React.MutableRefObject<any>, React.CSSProperties] => {
  const [hoverRef, isHovered] = useHover()

  const currentStyles = isHovered
    ? args.onHover.reduce<React.CSSProperties>((styles, [key, prop]) => {
      return {
        ...styles,
        [key]: prop
      }
    }, args.styles)
    : args.styles
  return [hoverRef, currentStyles]
}

export default useHoverStyles