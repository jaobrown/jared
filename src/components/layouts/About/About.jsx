import React from 'react'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import clientConfig from '@client-config'

import { StripeBox } from '@images/svg/StripeBox'

export const About = ({ heading, subheading, tidbits, photo }) => {
  const fluidProps = getFluidGatsbyImage(
    photo?.asset?._id,
    { maxWidth: 1200 },
    clientConfig.sanity
  )
  return (
    <section className="relative pt-10 pb-20 lg:pt-32 lg:pb-24">
      <span className="absolute top-0 right-0 hidden transform sm:block text-blue sm:translate-y-10 lg:translate-y-12 sm:-translate-x-5 md:-translate-x-10 xl:translate-y-16 xl:-translate-x-16">
        <StripeBox className="w-20 h-20 md:h-24 md:w-24" />
      </span>
      <span className="absolute top-0 left-0 transform translate-y-8 sm:translate-y-16 lg:translate-y-24">
        <span className="block w-48 h-0.5 lg:w-56 xl:w-80 bg-gray-300" />
      </span>
      <div className="max-w-md px-4 mx-auto lg:container lg:px-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 xl:gap-40">
          <div className="py-10 lg:py-0">
            <Img fluid={fluidProps} className="w-full h-auto" />
            <h2 className="mt-8 text-xl font-bold tracking-wider uppercase lg:mt-12 md:text-2xl">
              {heading}
            </h2>
            <p className="mt-4 font-serif leading-snug tracking-wide text-md">
              {subheading}
            </p>
          </div>
          <div className="mt-6 space-y-8">
            {tidbits.map((tidbit, idx) => (
              <div className="max-w-sm" key={tidbit._key}>
                <span className="inline-block font-serif text-lg text-blue">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-semibold tracking-wider uppercase">
                  {tidbit.heading}
                </h3>
                <p className="mt-2 font-serif leading-snug tracking-wide text-md">
                  {tidbit.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
