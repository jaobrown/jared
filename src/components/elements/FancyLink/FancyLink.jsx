import React from 'react'

import { Link } from '@elements'

import { StripeBall } from '@images/svg/StripeBall'
import { SolidBall } from '@images/svg/SolidBall'
import { OutlineBall } from '@images/svg/OutlineBall'

export const FancyLink = ({ style, to, className, children }) => {
  let type

  switch (style) {
    case 'stripes':
      type = <StripeBall className="w-9 h-9" />
      break
    case 'solid':
      type = <SolidBall className="w-9 h-9" />
      break
    case 'outline':
      type = <OutlineBall className="w-9 h-9" />
      break
    default:
      type = <div>Oops! Unhandled style type of {style}</div>
      break
  }

  return (
    <Link
      to={to}
      className={`flex items-center xl:text-lg hover:opacity-50 transition duration-100 ${className}`}
    >
      <span className="mr-6 text-blue">{type}</span>
      {children}
    </Link>
  )
}
