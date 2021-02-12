import React from 'react'

import { FancyLink } from '@elements'

export const ThreeColumnCta = ({ links }) => {
  return (
    <section className="pt-5 pb-20 lg:pt-10 lg:pb-32">
      <div className="grid max-w-md gap-8 px-4 mx-auto xl:gap-12 lg:grid-cols-3 lg:container lg:px-20">
        {links.map((link) => {
          const slug = link?.pageRoute?.slug?.current
            ? `/${link?.pageRoute?.slug?.current}`
            : link?.link
            ? link.link
            : `/`
          return (
            <FancyLink
              key={link._key}
              to={slug}
              style={link.style}
              className="tracking-wider "
            >
              {link.text}
            </FancyLink>
          )
        })}
      </div>
    </section>
  )
}
