import { getLanguageFromPath } from './languageManager';
import { getTranslatedUrl } from '../data/urlMappings';

export const getEnvironmentConfig = () => {
  if (typeof window === 'undefined') {
    // console.log('SSR: Using default config');
    return {
      pathPrefix: '',
      hostname: 'mfn-berlin.github.io'
    };
  }
  
  const hostname = window.location.hostname;
  // console.log('Current hostname:', hostname);
  
  // GitHub Pages
  if (hostname === 'mfn-berlin.github.io') {
    // console.log('Environment: GitHub Pages');
    return {
      pathPrefix: '',
      hostname
    };
  }
  
  // Other environments (test, production, local)
  // console.log('Environment: Other (local/test/prod)');
  return {
    pathPrefix: '',
    hostname
  };
};

export const generateUrl = (to, currentPath) => {
  // If it's an external URL, return as is
  if (to.startsWith('http')) return to;
  
  // If the URL already has a language prefix, use it
  if (to.startsWith('/de/') || to.startsWith('/en/')) {
    return to;
  }
  
  // Default to German for paths without language prefix
  return `/de${to}`;
}; 