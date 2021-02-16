import React from 'react'

import { Link } from '@elements'

export const Desktop = () => {
  return (
    <nav className="hidden text-sm sm:block">
      <Link
        to="/"
        className="ml-12 xl:ml-16"
        kind="link"
        activeClassName="text-blue"
      >
        about
      </Link>
      <Link
        to="/experience"
        className="ml-12 xl:ml-16"
        kind="link"
        activeClassName="text-blue"
      >
        experience
      </Link>
      <Link
        to="/work"
        className="ml-12 xl:ml-16"
        kind="link"
        activeClassName="text-blue"
      >
        work
      </Link>
      <a
        href="#contact"
        className="ml-12 font-semibold tracking-widest uppercase xl:ml-16"
      >
        contact
      </a>
    </nav>
  )
}
