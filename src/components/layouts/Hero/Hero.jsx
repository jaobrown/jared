import React from 'react'

import { Experience } from './Experience/Experience'
import { Home } from './Home/Home'
import { Work } from './Work/Work'

export const Hero = (props) => {
  switch (props.style) {
    case 'experience':
      return <Experience {...props} />

    case 'work':
      return <Work {...props} />

    case 'home':
      return <Home {...props} />

    default:
      return (
        <section className="py-10">
          <div className="container prose">
            Whoops! <code>{props.style}</code> is an unhandles style.
          </div>
        </section>
      )
  }
}
