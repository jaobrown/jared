import React from 'react'

import { Link } from '@elements'
import {
  Mobile as MobileNavigation,
  Desktop as DesktopNavigation,
} from '@globals'
import { Logo } from '@images/svg/Logo'

export const Header = ({ colorMode }) => {
  return (
    <header
      className={`py-6 lg:py-10 xl:py-14 ${
        colorMode === 'dark'
          ? 'text-white bg-gray-700'
          : 'bg-white text-gray-700'
      }`}
    >
      <div className="container flex items-center justify-between lg:max-w-4xl lg:px-0 xl:max-w-none xl:px-20">
        <Link to="/" className="text-gray-700">
          <Logo className="w-16 h-16 sm:w-20 sm:h-20" />
        </Link>
        <div>
          <DesktopNavigation />
          <MobileNavigation />
        </div>
      </div>
    </header>
  )
}
