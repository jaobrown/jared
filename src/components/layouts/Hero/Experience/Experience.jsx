import React from 'react'

import { Link } from '@elements'
import { X } from '@images/svg/X'
import { Box } from '@images/svg/Box'

export const Experience = ({ heading, subheading, resume = true }) => {
  return (
    <section className="pt-16 pb-10 text-black xl:pb-12 md:pt-16 lg:pt-20">
      <div className="container">
        <div className="text-center">
          <h1 className="relative mx-auto text-4xl font-bold leading-tight tracking-wide capitalize w-min-content sm:text-5xl md:text-6xl">
            <span className="absolute top-0 left-0 z-10 transform -translate-x-8 sm:-translate-x-12 md:-translate-x-24 md:-translate-y-2 text-blue">
              <X className="w-5 h-5 md:w-8 md:h-8" />
            </span>
            <span className="absolute bottom-0 right-0 z-10 transform translate-x-6 translate-y-2 sm:translate-x-12 md:translate-y-4 md:translate-x-24 text-blue">
              <Box className="w-5 h-5 md:w-8 md:h-8" />
            </span>
            {heading}
          </h1>
          <p className="max-w-md mx-auto mt-3 font-serif leading-snug md:text-lg">
            {subheading}
          </p>
          {resume && (
            <Link
              to={`${resume.asset.url}?dl=`}
              kind="text"
              className="inline-block mt-5 tracking-wide capitalize md:text-lg sm:mt-8"
            >
              Download Resume
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
