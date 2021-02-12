import { useState, useEffect } from 'react'
import { window } from 'browser-monads'

export const useSessionStorage = (key, initial) => {
  const item = window.sessionStorage.getItem(key)
  const [value, setValue] = useState(item || initial)

  useEffect(() => {
    window.sessionStorage.setItem(key, value)
  }, [value, key])

  return { value, setValue }
}
