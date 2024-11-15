/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Gatsby Tailwind Site`,
    description: `Kick off your next, great Gatsby project with this default starter.`,
    author: `@gatsbyjs`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    // Image handling
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

    // Static files
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static`,
      },
    },

    // Data handling
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `Publications2020Json`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: `publications`,
      },
    },

    // Build optimization
    'gatsby-plugin-no-sourcemaps',
    {
      resolve: 'gatsby-plugin-remove-fingerprints',
      options: {
        removeAllFingerprints: true,
        fingerprintExtensions: ['js', 'css'],
      },
    },

    // Styling
    "gatsby-plugin-postcss",

    // PWA/Manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/mfn-landingpages/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
        publicPath: `/mfn-landingpages/`,
      },
    },
  ],
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
  },
  pathPrefix: "/mfn-landingpages",
}
