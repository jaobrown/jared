require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: `Jared Brown`,
    description: `Jared is a web tech engineer focused on the front end. Genuinely enjoys javascript.`,
    author: `@jaobrown`,
    titleTemplate: '%s · Front End Engineer',
    url: 'https://www.jared.to', // No trailing slash allowed!
    image: '/images/jared.jpg', // Path to your image you placed in the 'static' folder
    twitterUsername: '@kodadevs',
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jared Brown`,
        short_name: `Jared Brown`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#6960FF`,
        display: `standalone`,
        icon: `src/images/png/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
