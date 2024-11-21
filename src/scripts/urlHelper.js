import { withPrefix } from 'gatsby';

export const getEnvironmentConfig = () => {
  if (typeof window === 'undefined') return {
    pathPrefix: '/mfn-landingpages',
    hostname: 'mfn-berlin.github.io'
  };
  
  const hostname = window.location.hostname;
  
  // GitHub Pages
  if (hostname === 'mfn-berlin.github.io') {
    return {
      pathPrefix: '/mfn-landingpages',
      hostname
    };
  }
  
  // Other environments (test, production, local)
  return {
    pathPrefix: '',
    hostname
  };
};

export const generateUrl = (path) => {
  // Handle external URLs
  if (path.startsWith('http')) {
    return path;
  }

  // Clean the path from any prefixes and ensure proper format
  const cleanPath = path
    .replace(/^\/+/, '') // Remove leading slashes
    .replace(/\/+/g, '/') // Replace multiple slashes with single slash
    .replace(/^mfn-landingpages\//, '') // Remove mfn-landingpages if it exists
    .replace(/^undefined\//, ''); // Remove undefined if it exists

  // Use Gatsby's withPrefix to add the correct path prefix
  return withPrefix(`/${cleanPath}`);
}; 