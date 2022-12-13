import { useRef } from 'react'
import useHover from '../hooks/useHover'

export default function HoverComponent() {
  const elementRef = useRef()
  const hovered = useHover(elementRef)

  return (
    <div
      ref={elementRef}
      style={{
        backgroundColor: hovered ? '#A020F0' : '#73C2FB',
        width: '100px',
        height: '100px',
        position: 'absolute',
        top: 'calc(50% - 50px)',
        left: 'calc(50% - 50px)',
        transition: 'all 0.3s ease-in-out'
      }}
    />
  )
}
