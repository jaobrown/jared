import React from 'react'
import dayjs from 'dayjs'
import BlockContent from '@sanity/block-content-to-react'

import { Link } from '@elements'

export const Experiences = ({ experiences }) => {
  return (
    <section className="">
      <div className="container max-w-2xl pb-20 md:pb-24 lg:pb-30 xl:pb-32 mx-none lg:max-w-4xl xl:max-w-5xl">
        <h2 className="text-lg font-semibold tracking-widest uppercase md:text-xl text-blue">
          Experience
        </h2>
        <div className="mt-8 space-y-12 lg:mt-12 lg:space-y-16">
          {experiences.map((experience) => {
            const date = {}
            date.start = dayjs(experience.startDate).format('MMMM YYYY')
            date.end = experience.endDate
              ? dayjs(experience.endDate).format('MMMM YYYY')
              : 'Present'

            return (
              <div key={experience.id} className="mx-auto sm:px-10 md:px-13">
                <p className="font-serif text-sm">
                  {date.start} - {date.end}
                </p>
                <Link to={experience.website} className="inline-block">
                  <h3 className="text-xl font-bold tracking-wider uppercase md:text-2xl hover:opacity-50 transition-opacity duration-100">
                    {experience.name}
                  </h3>
                </Link>
                <h4 className="mt-6 text-sm font-semibold tracking-wider uppercase text-blue">
                  {experience.position}
                </h4>

                <BlockContent
                  className="pl-3 mt-2 font-serif border-l-2 border-gray-300 max-w-prose sm:text-lg space-y-4"
                  blocks={experience.description}
                  dataset={process.env.GATSBY_SANITY_DATASET}
                  projectId={process.env.GATSBY_SANITY_PROJECT_ID}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
