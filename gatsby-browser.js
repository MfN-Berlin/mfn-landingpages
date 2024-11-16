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
      // Immediately prevent script loading
      const originalAppendChild = Node.prototype.appendChild;
      Node.prototype.appendChild = function(node) {
        if (node.tagName === 'SCRIPT') {
          // Block Gatsby/React scripts
          if (node.src && (
            node.src.includes('webpack-runtime') ||
            node.src.includes('framework') ||
            node.src.includes('app')
          )) {
            return node;
          }
        }
        return originalAppendChild.call(this, node);
      };

      // Prevent React from initializing
      Object.defineProperty(window, 'React', { get: () => undefined });
      Object.defineProperty(window, 'ReactDOM', { get: () => undefined });
      Object.defineProperty(window, '___gatsby', { 
        value: {
          disableCorePrefetching: true,
          loader: { loadPage: () => Promise.resolve({ error: true }) }
        },
        writable: false
      });

      // Remove script tags that might cause hydration
      document.querySelectorAll('script[src*="webpack-runtime"], script[src*="framework"], script[src*="app"]')
        .forEach(script => script.remove());
    }
  }
}

// Prevent any Gatsby routing
export const shouldUpdateScroll = () => false;
export const onPreRouteUpdate = () => false;
export const onRouteUpdate = () => false;