import React from 'react'

export const Work = ({ heading }) => {
  return (
    <section className="pt-10 text-black md:pt-16 lg:pt-20">
      <div className="container">
        <h1 className="text-xl font-semibold tracking-widest text-center uppercase">
          {heading}
        </h1>
        <span className="flex justify-center py-8 md:py-10 xl:py-14">
          <span className="w-0.5 h-16 xl:h-20 bg-blue"></span>
        </span>
      </div>
    </section>
  )
}
