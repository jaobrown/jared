import React from 'react'

import { Layout } from '@globals'
import { Hero } from '@layouts'

const NotFoundPage = () => {
  return (
    <Layout colorMode="dark">
      <Hero
        heading="404: Page Not Found"
        subheading="If you expected to see something here, I'm so sorry"
        style="home"
      />
    </Layout>
  )
}

export default NotFoundPage
