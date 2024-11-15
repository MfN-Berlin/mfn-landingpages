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

export const onRouteUpdate = ({ location }) => {
  if (process.env.NODE_ENV === 'production') {
    if (location.pathname.startsWith('/mfn-landingpages')) {
      window.__PATH_PREFIX__ = '/mfn-landingpages'
    }
  }
}