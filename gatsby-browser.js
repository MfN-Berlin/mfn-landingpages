/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

import './src/styles/global.css'

// Prevent initial URL normalization but keep normal navigation
export const onClientEntry = () => {
  if (typeof window !== 'undefined') {
    // Store the original URL
    const originalPath = window.location.pathname;
    
    // Override Gatsby's initial path normalization
    window.__GATSBY_INITIAL_PATH__ = originalPath;
    window.__BASE_PATH__ = '';
    
    // Keep the original URL
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;
    
    // Only block automatic redirects that include pathPrefix
    window.history.pushState = function() {
      if (arguments[2]?.includes('/mfn-landingpages/')) {
        console.log('Blocked automatic redirect to:', arguments[2]);
        return;
      }
      return originalPushState.apply(this, arguments);
    };
    
    window.history.replaceState = function() {
      if (arguments[2]?.includes('/mfn-landingpages/')) {
        console.log('Blocked automatic redirect to:', arguments[2]);
        return;
      }
      return originalReplaceState.apply(this, arguments);
    };
  }
}

// Keep normal route updates for clicked links
export const onRouteUpdate = ({ location }) => {
  // Allow normal navigation
  return true;
}