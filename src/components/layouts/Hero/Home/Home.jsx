import React from 'react'

import { StripeBall } from '@images/svg/StripeBall'

export const Home = ({ heading, subheading }) => {
  return (
    <section className="pb-24 text-white bg-gray-700 pt-15 md:pt-28 lg:pb-52 md:pb-44 lg:pt-24 xl:pt-32 xl:pb-64">
      <div className="container">
        <div className="relative mx-auto w-min-content md:w-max-content">
          <span className="absolute top-0 left-0 z-10 transform -translate-x-12 -translate-y-1/2 text-blue">
            <StripeBall className="w-24 h-24" />
          </span>
          <h1 className="relative z-20 text-4xl font-bold leading-none tracking-wide capitalize lg:text-6xl">
            {heading}
          </h1>
          <h2 className="relative z-20 flex items-center justify-start mt-4 font-serif text-right lowercase lg:mt-0 lg:text-lg md:justify-end">
            <span className="hidden w-32 h-0 mr-4 border-b border-white md:inline-block"></span>
            <span className="mr-4 font-sans font-semibold md:hidden text-blue text-md">
              x
            </span>
            {subheading}
          </h2>
        </div>
      </div>
    </section>
  )
}
