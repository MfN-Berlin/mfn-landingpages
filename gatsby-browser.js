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
      // Keep the original URL
      const originalPath = window.location.pathname;

      // Override Gatsby's routing system without breaking React
      window.___navigate = (pathname) => {
        window.location.href = pathname;
      };

      // Prevent Gatsby's loader without breaking React
      window.___loader = {
        enqueue: () => {},
        hovering: () => {},
        loadPage: (pathname) => {
          if (pathname === originalPath) {
            return Promise.resolve({ component: { default: null } });
          }
          return Promise.reject();
        }
      };

      // Disable prefetching
      window.___prefetchPathname = () => {};
    }
  }
}

export const shouldUpdateScroll = () => false;
export const onPreRouteUpdate = () => false;
export const onRouteUpdate = () => false;