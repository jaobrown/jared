import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

export const Link = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  kind,
  className,
  ...other
}) => {
  let style = 'uppercase font-semibold tracking-widest'

  switch (kind) {
    case 'link':
      style = 'uppercase font-semibold tracking-widest'
      break
    case 'text':
      style = 'font-serif font-normal lowercase border-b border-blue'
      break
    default:
      style = 'uppercase font-semibold'
      break
  }

  const internal = /^\/(?!\/)/.test(to)

  if (internal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
        className={`${className} ${style}`}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a
      href={to}
      {...other}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} ${style}`}
    >
      {children}
    </a>
  )
}
