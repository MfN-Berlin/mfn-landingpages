/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

import './src/styles/global.css'

export const onClientEntry = () => {
  if (typeof window !== 'undefined') {
    const isProxiedPath = window.location.hostname === 'test.mfn.gcsdev.de' 
                         && !window.location.pathname.includes('/mfn-landingpages');

    if (isProxiedPath) {
      // Prevent React hydration
      window.___gatsby = {
        disableCorePrefetching: true,
        shouldUpdateScroll: () => false,
        loader: { loadPage: () => Promise.resolve({ error: true }) }
      };

      // Clear the container to prevent hydration
      const gatsbyRoot = document.getElementById('___gatsby');
      if (gatsbyRoot) {
        const content = gatsbyRoot.innerHTML;
        gatsbyRoot.innerHTML = '';
        // Re-insert content after a tick to prevent React from picking it up
        setTimeout(() => {
          gatsbyRoot.innerHTML = content;
        }, 0);
      }

      // Block all Gatsby/React initialization
      Object.defineProperty(window, 'ReactDOM', {
        get: () => null,
        configurable: false
      });
      
      // Prevent any routing
      window.___navigate = () => false;
      window.history.pushState = () => {};
      window.history.replaceState = () => {};
    }
  }
}

// Block all routing events
export const shouldUpdateScroll = () => false;
export const onPreRouteUpdate = () => false;
export const onRouteUpdate = () => false;