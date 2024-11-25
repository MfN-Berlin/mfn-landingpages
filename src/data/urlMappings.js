import { withPrefix } from 'gatsby';

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
  
  if (targetLang === 'en') {
    // Looking for German to English mapping
    const translatedPath = urlMappings[normalizedPath] || `/${targetLang}${currentPath.slice(3)}`;
    console.log('Translated to EN:', translatedPath);
    return withPrefix(translatedPath);
  } else {
    // Looking for English to German mapping
    const matchingPair = Object.entries(urlMappings).find(([_, en]) => en === normalizedPath);
    const translatedPath = matchingPair ? matchingPair[0] : `/${targetLang}${currentPath.slice(3)}`;
    console.log('Translated to DE:', translatedPath);
    return withPrefix(translatedPath);
  }
}; 