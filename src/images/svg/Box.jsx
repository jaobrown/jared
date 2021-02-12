import React from 'react'

export const Box = ({ className }) => {
  return (
    <svg
      viewBox="0 0 29 30"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 4H4v22h21V4z"
        stroke="currentColor"
        strokeWidth={4}
        strokeMiterlimit={10}
      />
    </svg>
  )
}
