import React from 'react'

export const OutlineBall = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 35c8.837 0 16-7.163 16-16S27.837 3 19 3 3 10.163 3 19s7.163 16 16 16z"
        stroke="currentColor"
        strokeWidth={2}
        strokeMiterlimit={10}
      ></path>
    </svg>
  )
}
