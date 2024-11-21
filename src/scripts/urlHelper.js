import { withPrefix } from 'gatsby';

const getEnvironmentConfig = () => {
  if (typeof window === 'undefined') return {
    baseUrl: '',
    isExternal: false
  };
  
  const hostname = window.location.hostname;
  
  // GitHub Pages
  if (hostname === 'mfn-berlin.github.io') {
    return {
      baseUrl: '/de',
      pathPrefix: '/mfn-landingpages',
      isExternal: false
    };
  }
  
  // Test environment
  if (hostname === 'test.mfn.gcsdev.de') {
    return {
      baseUrl: '/de',
      pathPrefix: '',
      isExternal: false
    };
  }
  
  // Production
  if (hostname === 'www.museumfuernaturkunde.berlin') {
    return {
      baseUrl: '/de',
      pathPrefix: '',
      isExternal: false
    };
  }
  
  // Local development
  return {
    baseUrl: '',
    pathPrefix: '',
    isExternal: false
  };
};

export const generateUrl = (path) => {
  const { baseUrl, pathPrefix } = getEnvironmentConfig();
  
  // Handle external URLs
  if (path.startsWith('http')) {
    return path;
  }
  
  // Ensure path starts with slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Remove duplicate slashes and combine paths
  const combinedPath = `${pathPrefix}${normalizedPath}`.replace(/\/+/g, '/');
  
  return withPrefix(combinedPath);
}; 