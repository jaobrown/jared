import { useState, useEffect } from 'react'
import { window } from 'browser-monads'

export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })
  return width
}
