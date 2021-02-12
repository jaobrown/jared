import React from 'react'
import { useAppState } from '../../Layout'

export const Mobile = () => {
  const { toggleMenu } = useAppState()
  return (
    <nav className="flex items-center sm:hidden">
      <button onClick={toggleMenu} className="w-8 h-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-full h-full"
        >
          <path
            className="fill-current"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          ></path>
        </svg>
      </button>
    </nav>
  )
}
