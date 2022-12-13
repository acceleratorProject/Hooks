import { useState, useEffect } from 'react'

export default function useHover(ref) {
  const [hovered, setHovered] = useState(false)
  let refElement = ref

  useEffect(() => {
    refElement = ref

    refElement.current.addEventListener('mouseover', () => setHovered(true))
    refElement.current.addEventListener('mouseout', () => setHovered(false))
  }, [ref])

  return hovered
}
