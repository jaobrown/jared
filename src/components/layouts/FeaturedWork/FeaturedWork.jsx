import React from 'react'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import clientConfig from '@client-config'

import { Link } from '@elements'
import { slugify } from '@utils'

export const FeaturedWork = ({ works }) => {
  return (
    <section className="pb-10 sm:pb-20">
      <div className="container space-y-12 sm:space-y-16 xl:space-y-20">
        {works.map((work) => {
          const slug = slugify(`${work.title} ${work.companyName}`)
          const fluidProps = getFluidGatsbyImage(
            work.featuredImage?.asset?._id,
            { maxWidth: 2400 },
            clientConfig.sanity
          )
          return (
            <Link
              key={work.id}
              className="block max-w-4xl mx-auto"
              to={`/${slug}`}
            >
              <article>
                <Img fluid={fluidProps} alt={`${work.title} preview`} />
                <h2 className="mt-2 text-lg font-bold leading-tight tracking-wider uppercase sm:text-xl sm:mt-4 lg:mt-6 md:text-2xl">
                  {work.title}
                </h2>
                <p className="mt-1 text-sm font-semibold tracking-wider uppercase md:text-base text-blue">
                  {work.companyName}
                </p>
              </article>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
