import { withPrefix } from 'gatsby';
import { getEnvironmentConfig } from '../scripts/urlHelper';

// Map of URLs between languages (DE -> EN and EN -> DE)
export const urlMappings = {
  // German to English
  '/de/': '/en/',
  '/de/besuch-planen': '/en/visit',
  '/de/mitmachen': '/en/participate',
  '/de/forschung': '/en/research',
  '/de/museum': '/en/museum',
  '/de/kontakt': '/en/contact',
  '/de/publikationen': '/en/publications',
  '/de/team-projekte': '/en/teams-projects',
  
  // English to German
  '/en/': '/de/',
  '/en/visit': '/de/besuch-planen',
  '/en/participate': '/de/mitmachen',
  '/en/research': '/de/forschung',
  '/en/museum': '/de/museum',
  '/en/contact': '/de/kontakt',
  '/en/publications': '/de/publikationen',
  '/en/teams-projects': '/de/team-projekte',
};

export const getTranslatedUrl = (currentPath, targetLang) => {
  console.log('getTranslatedUrl input:', { currentPath, targetLang });

  if (!currentPath) return withPrefix(`/${targetLang}/`);

  // Remove the path prefix if it exists
  const pathPrefix = '/mfn-landingpages';
  const normalizedPath = currentPath
    .replace(pathPrefix, '')  // Remove path prefix if present
    .replace(/\/$/, '');      // Remove trailing slash
    
  console.log('normalizedPath after prefix removal:', normalizedPath);
  
  let translatedPath;
  if (targetLang === 'en') {
    // Looking for German to English mapping
    if (normalizedPath.startsWith('/de/')) {
      translatedPath = urlMappings[normalizedPath] || `/${targetLang}${normalizedPath.slice(3)}`;
    } else {
      // Already an English path, keep it
      translatedPath = normalizedPath;
    }
    console.log('Translated to EN:', translatedPath);
  } else {
    // Looking for English to German mapping
    if (normalizedPath.startsWith('/en/')) {
      const matchingPair = Object.entries(urlMappings).find(([_, en]) => en === normalizedPath);
      translatedPath = matchingPair ? matchingPair[0] : `/${targetLang}${normalizedPath.slice(3)}`;
    } else {
      // Already a German path, keep it
      translatedPath = normalizedPath;
    }
    console.log('Translated to DE:', translatedPath);
  }

  // Clean up any double slashes
  const cleanPath = translatedPath.replace(/\/+/g, '/');

  // Get environment configuration
  const { hostname } = getEnvironmentConfig();
  
  // If we're on GitHub Pages
  if (hostname === 'mfn-berlin.github.io') {
    return `${pathPrefix}${cleanPath}`;
  }
  
  // In development or other environments
  return cleanPath;
}; 