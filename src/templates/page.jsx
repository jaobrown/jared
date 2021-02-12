import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '@globals'

const PageTemplate = ({ data, location }) => {
  const currentRoute = location.pathname
  const headerColorMode = currentRoute === '/' ? 'dark' : 'light'

  const content = (data.sanityPage._rawContent || [])
    .filter((c) => !c.disabled)
    .map((c) => {
      let layout = null
      switch (c._type) {
        case 'about':
          const { About } = require('@layouts')
          layout = <About key={c._key} {...c} />
          break
        case 'educations':
          const { Educations } = require('@layouts')
          layout = <Educations key={c._key} {...c} />
          break
        case 'experiences':
          const { Experiences } = require('@layouts')
          layout = <Experiences key={c._key} {...c} />
          break
        case 'featuredWork':
          const { FeaturedWork } = require('@layouts')
          layout = <FeaturedWork key={c._key} {...c} />
          break
        case 'hero':
          const { Hero } = require('@layouts')
          layout = <Hero key={c._key} {...c} />
          break
        case 'threeColumnCta':
          const { ThreeColumnCta } = require('@layouts')
          layout = <ThreeColumnCta key={c._key} {...c} />
          break
        default:
          const { ComingSoon } = require('@utils/components')
          layout = <ComingSoon key={c._key} {...c} />
          break
      }
      return layout
    })
  return <Layout colorMode={headerColorMode}>{content}</Layout>
}

export default PageTemplate

export const PAGE_QUERY = graphql`
  query PAGE_QUERY($_id: String!) {
    sanityPage(_id: { eq: $_id }) {
      _rawContent(resolveReferences: { maxDepth: 10 })
      title
    }
  }
`
