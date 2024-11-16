/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

import './src/styles/global.css'

export const onClientEntry = () => {
  if (typeof window !== 'undefined') {
    // Check if we're on the proxy domain without /mfn-landingpages
    const isProxiedPath = window.location.hostname === 'test.mfn.gcsdev.de' 
                         && !window.location.pathname.includes('/mfn-landingpages');

    if (isProxiedPath) {
      // Prevent any routing initialization
      window.___loader = { enqueue: () => {}, hovering: () => {} };
      
      // Override Gatsby's navigate
      window.___navigate = () => false;

      // Prevent history manipulation
      const originalPushState = window.history.pushState;
      window.history.pushState = function(...args) {
        // Block any attempts to modify the URL
        return false;
      };
    }
  }
}

export const shouldUpdateScroll = () => false;
export const onPreRouteUpdate = () => false;
export const onRouteUpdate = () => false;