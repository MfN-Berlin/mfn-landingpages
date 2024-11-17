/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

import './src/styles/global.css'

export const onClientEntry = () => {
  console.log('🟢 onClientEntry started');
  
  if (typeof window !== 'undefined') {
    console.log('🟢 Window is defined');
    console.log('📍 Current URL:', window.location.href);
    console.log('📍 Current hostname:', window.location.hostname);
    console.log('📍 Current pathname:', window.location.pathname);
    console.log('🔍 Gatsby initial state:', {
      pathPrefix: window.___GATSBY?.pathPrefix,
      basePath: window.___GATSBY?.basePath,
      PATH_PREFIX: window.__PATH_PREFIX__
    });

    const isProxiedPath = window.location.hostname === 'test.mfn.gcsdev.de' 
                         && !window.location.pathname.includes('/mfn-landingpages');
    
    console.log('🤔 Is proxied path?', isProxiedPath);
    console.log('🤔 Hostname check:', window.location.hostname === 'test.mfn.gcsdev.de');
    console.log('🤔 Path check:', !window.location.pathname.includes('/mfn-landingpages'));

    if (isProxiedPath) {
      console.log('🟡 Attempting to override Gatsby initialization...');
      
      const originalPath = window.location.pathname;
      console.log('📌 Original path stored as:', originalPath);

      try {
        // Override GATSBY object
        Object.defineProperty(window, '___GATSBY', {
          value: {
            ...window.___GATSBY,
            pathPrefix: '',
            __PATH_PREFIX__: '',
            basePath: originalPath
          },
          writable: false,
          configurable: false
        });
        console.log('✅ Successfully overrode ___GATSBY object');
        console.log('🔍 New Gatsby state:', {
          pathPrefix: window.___GATSBY?.pathPrefix,
          basePath: window.___GATSBY?.basePath,
          PATH_PREFIX: window.__PATH_PREFIX__
        });

        // Monitor for navigation attempts
        const originalPushState = window.history.pushState;
        window.history.pushState = function(...args) {
          console.log('🚨 pushState attempted with:', args);
          return originalPushState.apply(this, [null, '', originalPath]);
        };

        // Monitor location changes
        let lastPathname = window.location.pathname;
        setInterval(() => {
          if (window.location.pathname !== lastPathname) {
            console.log('🚨 Path changed from', lastPathname, 'to', window.location.pathname);
            lastPathname = window.location.pathname;
          }
        }, 100);

        console.log('✅ Successfully set up monitoring');
      } catch (error) {
        console.error('❌ Error during override:', error);
      }
    } else {
      console.log('⏭️ Not a proxied path, skipping overrides');
    }
  } else {
    console.log('⚠️ Window not defined');
  }
  
  console.log('🏁 onClientEntry completed');
};

// Monitor routing events
export const shouldUpdateScroll = (...args) => {
  console.log('🛑 shouldUpdateScroll called with:', args);
  return false;
};

export const onPreRouteUpdate = (...args) => {
  console.log('🛑 onPreRouteUpdate called with:', args);
  return false;
};

export const onRouteUpdate = (...args) => {
  console.log('🛑 onRouteUpdate called with:', args);
  return false;
};