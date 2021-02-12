import React from 'react'
import dayjs from 'dayjs'

export const Educations = ({ educations }) => {
  return (
    <section className="py-12 mt-6 lg:pb-15">
      <div className="container max-w-2xl mx-none lg:max-w-4xl xl:max-w-5xl">
        <h2 className="text-lg font-semibold tracking-widest uppercase md:text-xl text-blue">
          education
        </h2>
        <div className="mt-8 lg:mt-12">
          {educations.map((education) => {
            const date = {}
            date.start = dayjs(education.startDate).format('MMMM YYYY')
            date.end = education.endDate
              ? dayjs(education.endDate).format('MMMM YYYY')
              : 'Present'

            return (
              <div key={education.id} className="mx-auto sm:px-10 md:px-13">
                <p className="font-serif text-sm">
                  {date.start} - {date.end}
                </p>
                <h3 className="text-xl font-bold tracking-wider uppercase md:text-2xl">
                  {education.school}
                </h3>
                <h4 className="mt-2 text-sm font-semibold tracking-wider uppercase md:text-base">
                  {education.degree}
                </h4>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
