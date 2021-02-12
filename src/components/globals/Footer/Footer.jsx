import React from 'react'

import { Link } from '@elements'
import { Logo } from '@images/svg/Logo'

export const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="md:flex md:items-center">
          <Link to="/" className="text-white">
            <Logo className="w-16 h-16 mx-auto md:mx-0" />
          </Link>
        </div>
        <div className="flex justify-center mt-6 space-x-6 md:mt-0">
          <p className="mt-6 text-sm font-medium leading-6 tracking-wider text-center text-white uppercase md:ml-6 lg:ml-12 md:mt-0">
            © 2020 Alexandra Brown
            <span className="block mt-2 md:inline-block md:ml-8 lg:ml-12">
              Indianapolis, IN
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
