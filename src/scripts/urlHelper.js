import { withPrefix } from 'gatsby';

const getEnvironmentConfig = () => {
  if (typeof window === 'undefined') return {
    pathPrefix: '/mfn-landingpages'
  };
  
  const hostname = window.location.hostname;
  
  // GitHub Pages
  if (hostname === 'mfn-berlin.github.io') {
    return {
      pathPrefix: '/mfn-landingpages'
    };
  }
  
  // Other environments (test, production, local)
  return {
    pathPrefix: ''
  };
};

export const generateUrl = (path) => {
  const { pathPrefix } = getEnvironmentConfig();
  
  // Handle external URLs
  if (path.startsWith('http')) {
    return path;
  }
  
  // Remove any existing path prefix and clean up double slashes
  let cleanPath = path.replace(/^\/mfn-landingpages/, '')
                     .replace(/^\/undefined/, '')
                     .replace(/\/+/g, '/');
  
  // Ensure path starts with slash
  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath;
  }
  
  // For GitHub Pages, we use withPrefix
  // This will automatically add the pathPrefix from gatsby-config.js
  return withPrefix(cleanPath);
}; 