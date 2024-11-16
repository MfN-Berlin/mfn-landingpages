/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

import './src/styles/global.css'

// Disable Gatsby's routing
export const onClientEntry = () => {
  if (typeof window !== 'undefined') {
    // Disable prefetching
    window.___loader = { enqueue: () => {}, hovering: () => {} }
    
    // Disable Gatsby's routing
    window.___navigate = (pathname) => {
      window.location.href = pathname
    }
  }
}

// Prevent route updates
export const shouldUpdateScroll = () => {
  return false
}

// Prevent page transitions
export const onPreRouteUpdate = () => {
  return false
}

export const onRouteUpdate = () => {
  return false
}