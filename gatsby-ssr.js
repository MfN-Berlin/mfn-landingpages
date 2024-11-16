/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

const React = require('react');

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link 
      rel="stylesheet" 
      href="/mfn-landingpages/styles.css"
      key="global-styles"
    />,
  ]);
}
