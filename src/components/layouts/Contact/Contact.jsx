import React from 'react'

import { Link } from '@elements'

export const Contact = () => {
  return (
    <section
      className="py-16 text-black bg-gray-100 md:py-20 xl:py-24"
      id="contact"
    >
      <div className="container max-w-lg mx-auto">
        <h2 className="flex flex-wrap text-4xl font-bold leading-tight uppercase sm:items-center md:text-5xl">
          contact me
          <span className="flex w-full text-base font-medium sm:flex-col sm:justify-between md:text-lg sm:w-auto sm:ml-3">
            <span className="inline-block">via</span>
            <span className="inline-block ml-2 sm:ml-0">email</span>
          </span>
        </h2>
        <Link
          to="mailto:alex@alexandrabrown.me"
          kind="text"
          className="inline-block mt-4 sm:mt-0"
        >
          alex@alexandrabrown.me
        </Link>
      </div>
    </section>
  )
}
