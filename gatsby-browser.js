/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

import './src/styles/global.css'

export const onClientEntry = () => {
  if (typeof window !== 'undefined') {
    // Prevent any routing initialization
    window.___loader = { enqueue: () => {}, hovering: () => {} }
    
    // Prevent path prefix redirects
    const originalPush = window.history.pushState
    window.history.pushState = function() {
      // Do nothing to prevent redirects
    }
    
    window.___navigate = (pathname) => {
      // Do nothing to prevent Gatsby navigation
      return false
    }
  }
}

// Block all routing-related functions
export const shouldUpdateScroll = () => false
export const onPreRouteUpdate = () => false
export const onRouteUpdate = () => false
export const onRouteUpdateDelayed = () => false