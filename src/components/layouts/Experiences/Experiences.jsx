import React from 'react'
import dayjs from 'dayjs'

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
                <h3 className="text-xl font-bold tracking-wider uppercase md:text-2xl">
                  {experience.name}
                </h3>
                <h4 className="mt-6 text-sm font-semibold tracking-wider uppercase text-blue">
                  {experience.position}
                </h4>
                <p className="pl-3 mt-2 font-serif border-l-2 border-gray-300 max-w-prose sm:text-lg">
                  {experience.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
