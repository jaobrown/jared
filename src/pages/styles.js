import React from 'react'
import { Layout } from '@globals'

const IndexPage = () => {
  return (
    <Layout>
      <section>
        <div className="container">
          <div className="font-serif text-4xl">Hello world</div>
          <div className="font-sans text-6xl font-bold">Hello world</div>
          <div className="grid grid-flow-col gap-8 auto-cols-fr">
            <div className="h-40 bg-white rounded-md shadow-inner"></div>
            <div className="h-40 bg-black rounded-md shadow-inner"></div>
            <div></div>
            <div></div>
            <div className="h-40 bg-gray-100 rounded-md shadow-inner"></div>
            <div className="h-40 bg-gray-200 rounded-md shadow-inner"></div>
            <div className="h-40 bg-gray-300 rounded-md shadow-inner"></div>
            <div className="h-40 bg-gray-400 rounded-md shadow-inner"></div>
            <div className="h-40 bg-gray-500 rounded-md shadow-inner"></div>
            <div className="h-40 bg-gray-600 rounded-md shadow-inner"></div>
            <div className="h-40 bg-gray-700 rounded-md shadow-inner"></div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
