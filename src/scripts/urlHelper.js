const getEnvironmentConfig = () => {
  if (typeof window === 'undefined') return {
    baseUrl: '',
    isExternal: false
  };
  
  const hostname = window.location.hostname;
  
  // Test environment
  if (hostname === 'test.mfn.gcsdev.de') {
    return {
      baseUrl: '/de',
      isExternal: false
    };
  }
  
  // GitHub Pages
  if (hostname === 'mfn-berlin.github.io') {
    return {
      baseUrl: '/mfn-landingpages',
      isExternal: false
    };
  }
  
  // Production
  if (hostname === 'www.museumfuernaturkunde.berlin') {
    return {
      baseUrl: '/de',
      isExternal: false
    };
  }
  
  // Local development
  return {
    baseUrl: '',
    isExternal: false
  };
};

export const generateUrl = (path) => {
  const { baseUrl } = getEnvironmentConfig();
  
  // Handle external URLs
  if (path.startsWith('http')) {
    return path;
  }
  
  // Ensure path starts with slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${normalizedPath}`;
}; 