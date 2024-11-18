/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

import './src/styles/global.css'

// Temporär Prefetching deaktivieren
export const onClientEntry = () => {
    if (typeof window !== 'undefined') {
      window.___loader = { enqueue: () => {}, hovering: () => {} }
    }
  }