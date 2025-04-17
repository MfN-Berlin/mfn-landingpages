export const getEnvironmentConfig = () => {
  if (typeof window === 'undefined') {
    return {
      pathPrefix: '',
      hostname: 'mfn-berlin.github.io'
    };
  }
  
  const hostname = window.location.hostname;
  
  if (hostname === 'mfn-berlin.github.io') {
    return {
      pathPrefix: '',
      hostname
    };
  }
  
  return {
    pathPrefix: '',
    hostname
  };
};

export const generateUrl = (to, currentPath) => {
  // If it's an external URL, return as is
  if (to.startsWith('http')) {
    return to;
  }
  
  // If the URL already has a language prefix, use it
  if (to.startsWith('/de/') || to.startsWith('/en/') || to.startsWith('/leichte-sprache/')) {
    return to;
  }
  
  // Default to German for paths without language prefix
  const finalUrl = `/de${to}`;
  return finalUrl;
}; 


// https://pre-prod.museumfuernaturkunde.berlin/de