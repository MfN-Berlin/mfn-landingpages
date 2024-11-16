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
      // Immediately override crucial Gatsby routing functions
      Object.defineProperty(window, '___navigate', {
        value: () => false,
        writable: false,
        configurable: false
      });

      Object.defineProperty(window, '___loader', {
        value: { enqueue: () => {}, hovering: () => {} },
        writable: false,
        configurable: false
      });

      // Block history API
      window.history.pushState = () => {};
      window.history.replaceState = () => {};
      
      // Prevent any pathname modifications
      Object.defineProperty(window, 'pathname', {
        get: () => window.location.pathname,
        configurable: false
      });

      // Force Gatsby to think we're already at the correct path
      window.___GATSBY = {
        ...window.___GATSBY,
        pathname: window.location.pathname
      };
    }
  }
}

// Block all routing events
export const shouldUpdateScroll = () => false;
export const onPreRouteUpdate = () => false;
export const onRouteUpdate = () => false;
export const onRouteUpdateDelayed = () => false;