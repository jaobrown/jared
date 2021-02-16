import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import BlockContent from '@sanity/block-content-to-react'

import { Layout } from '@globals'
import { Link, VideoPlayer, Code } from '@elements'

const BlockRenderer = (props) => {
  const { style = 'normal' } = props.node

  if (style === 'normal') {
    return <p className="max-w-2xl">{props.children}</p>
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props)
}

const YouTubeRenderer = (props) => {
  const { url } = props.node
  return <VideoPlayer url={url} />
}

const CodeRenderer = (props) => {
  const { code } = props.node
  return <Code>{code}</Code>
}

const WorkTemplate = ({ data }) => {
  const page = data.sanityWork
  return (
    <Layout>
      <div className="container">
        <section className="pt-10">
          <Img fluid={page.featuredImage.asset.fluid} />
          <h1 className="mt-6 text-xl font-bold leading-snug tracking-wider uppercase sm:mt-10 md:text-2xl">
            {page.title}
          </h1>
          <Link
            className="block mt-1 text-sm font-semibold tracking-wider uppercase sm:text-base sm:mt-3"
            to={page.companyWebsite}
          >
            {page.companyName}
          </Link>
        </section>
        <section className="pb-10 mt-4 prose sm:mt-10 sm:pb-16 lg:pb-24 max-w-none">
          <BlockContent
            serializers={{
              types: {
                block: BlockRenderer,
                youtube: YouTubeRenderer,
                code: CodeRenderer,
              },
            }}
            blocks={page._rawContent}
            dataset={process.env.GATSBY_SANITY_DATASET}
            projectId={process.env.GATSBY_SANITY_PROJECT_ID}
          />
        </section>
      </div>
    </Layout>
  )
}

export default WorkTemplate

export const WorkQuery = graphql`
  query WorkQuery($_id: String!) {
    sanityWork(_id: { eq: $_id }) {
      title
      featuredImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      companyWebsite
      companyName
      _rawContent
    }
  }
`
