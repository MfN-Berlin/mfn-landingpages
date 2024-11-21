import { withPrefix } from 'gatsby';

export const getEnvironmentConfig = () => {
  if (typeof window === 'undefined') {
    console.log('SSR: Using default config');
    return {
      pathPrefix: '',
      hostname: 'mfn-berlin.github.io'
    };
  }
  
  const hostname = window.location.hostname;
  console.log('Current hostname:', hostname);
  
  // GitHub Pages
  if (hostname === 'mfn-berlin.github.io') {
    console.log('Environment: GitHub Pages');
    return {
      pathPrefix: '',
      hostname
    };
  }
  
  // Other environments (test, production, local)
  console.log('Environment: Other (local/test/prod)');
  return {
    pathPrefix: '',
    hostname
  };
};

export const generateUrl = (path) => {
  console.log('generateUrl - Input path:', path);

  // Handle external URLs
  if (path.startsWith('http')) {
    console.log('External URL detected, returning as-is');
    return path;
  }

  // Remove any existing path prefixes and clean the path
  let cleanPath = path
    .replace(/^\/+/, '') // Remove leading slashes
    .replace(/\/+/g, '/') // Replace multiple slashes with single slash
    .replace(/^mfn-landingpages\/mfn-landingpages\//, '') // Remove double prefix
    .replace(/^mfn-landingpages\//, '') // Remove single prefix
    .replace(/^undefined\//, ''); // Remove undefined if it exists

  console.log('After cleaning path:', cleanPath);

  // For absolute paths that should not have the prefix
  if (cleanPath.startsWith('de/search')) {
    console.log('Search path detected, returning absolute path');
    return `/${cleanPath}`;
  }

  // Use withPrefix only once
  const finalPath = `/${cleanPath}`;
  console.log('Final path with prefix:', finalPath);
  return finalPath;
}; 