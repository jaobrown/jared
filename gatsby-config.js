require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: `Jared Brown`,
    description: `Website for Jared Brown`,
    author: `@jaobrown`,
    siteUrl: `https://jared.to`,
  },
  plugins: [
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        graphqlTag: 'default',
      },
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src', // <- will be used as a root dir — alias paths below will be relative to this
        aliases: {
          '@elements': './components/elements', // <- "@elements" will become ./src/elements
          '@globals': './components/globals',
          '@client-config': '../client-config.js',
          '@hooks': './hooks',
          '@images': './images',
          '@layouts': './components/layouts',
          '@utils': './utils',
          '@static': '../static',
        },
      },
    },
    `gatsby-plugin-postcss`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Alexandra Brown`,
    //     short_name: `Alexandra Brown`,
    //     start_url: `/`,
    //     background_color: `#ffffff`,
    //     theme_color: `#2E3030`,
    //     display: `standalone`,
    //     icon: `src/images/png/icon.png`,
    //   },
    // },
    `gatsby-plugin-sitemap`,
  ],
}
