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
      // 1. Prevent script loading
      const originalAppendChild = Node.prototype.appendChild;
      Node.prototype.appendChild = function(node) {
        if (node.tagName === 'SCRIPT') {
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

      // 2. Store and preserve original URL
      const originalPath = window.location.pathname;
      const originalReplaceState = window.history.replaceState;
      const originalPushState = window.history.pushState;
      
      window.history.replaceState = function() {
        return originalReplaceState.apply(this, [null, '', originalPath]);
      };
      
      window.history.pushState = function() {
        return originalPushState.apply(this, [null, '', originalPath]);
      };

      // 3. Prevent React/Gatsby initialization
      Object.defineProperty(window, 'React', { get: () => undefined });
      Object.defineProperty(window, 'ReactDOM', { get: () => undefined });
      Object.defineProperty(window, '___gatsby', { 
        value: {
          disableCorePrefetching: true,
          loader: { loadPage: () => Promise.resolve({ error: true }) }
        },
        writable: false
      });

      // 4. Force original path in Gatsby
      Object.defineProperty(window, '___location', {
        get: () => ({ pathname: originalPath }),
        configurable: false
      });
      window.___pathPrefix = '';

      // 5. Remove problematic scripts
      document.querySelectorAll('script[src*="webpack-runtime"], script[src*="framework"], script[src*="app"]')
        .forEach(script => script.remove());
    }
  }
}

// Block all routing events
export const shouldUpdateScroll = () => false;
export const onPreRouteUpdate = () => false;
export const onRouteUpdate = () => false;