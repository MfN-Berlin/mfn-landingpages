/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
const isProduction = process.env.NODE_ENV === 'production'

module.exports = { 
  siteMetadata: {
    title: `My Gatsby Tailwind Site`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://www.yourdomain.tld`,
    languages: ['de', 'en'],
    defaultLanguage: 'de'
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
   
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `Publications2020Json`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'de',
        langKeyForNull: 'de',
        prefixDefault: false,
        useLangKeyLayout: false,
      },
    },
  ],
  flags: {
    FAST_DEV: true,
    DEV_SSR: false,
    PRESERVE_FILE_DOWNLOAD_CACHE: false,
  },
  assetPrefix: isProduction 
    ? 'https://mfn-berlin.github.io/mfn-landingpages'
    : '',
  pathPrefix: "/",
}
