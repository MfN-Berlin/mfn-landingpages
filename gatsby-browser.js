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
      // 1. Block React immediately
      const blockReact = () => {
        // Prevent React initialization
        Object.defineProperty(window, 'React', { 
          get: () => null,
          set: () => {},
          configurable: false
        });
        Object.defineProperty(window, 'ReactDOM', { 
          get: () => null,
          set: () => {},
          configurable: false
        });
        
        // Remove root container
        const root = document.getElementById('___gatsby');
        if (root) {
          const content = root.innerHTML;
          root.removeAttribute('id');
          root.innerHTML = content;
        }
      };

      // Execute immediately
      blockReact();
      // Also execute after a small delay to ensure it catches any late initialization
      setTimeout(blockReact, 0);

      // 2. Block script loading
      const originalAppendChild = Node.prototype.appendChild;
      Node.prototype.appendChild = function(node) {
        if (node.tagName === 'SCRIPT') {
          if (node.src && (
            node.src.includes('webpack-runtime') ||
            node.src.includes('framework') ||
            node.src.includes('app') ||
            node.src.includes('react')
          )) {
            return node;
          }
        }
        return originalAppendChild.call(this, node);
      };

      // 3. Preserve URL
      const originalPath = window.location.pathname;
      window.history.pushState = () => {};
      window.history.replaceState = () => {};

      // 4. Remove existing scripts
      document.querySelectorAll('script[src*="webpack-runtime"], script[src*="framework"], script[src*="app"], script[src*="react"]')
        .forEach(script => script.parentNode.removeChild(script));

      // 5. Prevent Gatsby
      window.___gatsby = {
        disableCorePrefetching: true,
        loader: { loadPage: () => Promise.resolve({ error: true }) }
      };
    }
  }
}

// Block all Gatsby events
export const shouldUpdateScroll = () => false;
export const onPreRouteUpdate = () => false;
export const onRouteUpdate = () => false;