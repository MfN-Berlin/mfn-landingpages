export const urlMappings = {
  // German to English
  '/de/': '/en/',
  '/de/besuch-planen': '/en/visit',
  '/de/mitmachen': '/en/participate',
  '/de/forschung': '/en/research',
  '/de/museum': '/en/museum',
  '/de/kontakt': '/en/contact',
  '/de/forschung/publikationen': '/en/research/publications',
  '/de/forschung/personensuche': '/en/research/people-search',
  '/de/datenschutzerklaerung': '/en/general-privacy-notice',
  '/de/datenschutzeinstellungen': '/en/privacy-settings',
  
  // English to German
  '/en/': '/de/',
  '/en/visit': '/de/besuch-planen',
  '/en/participate': '/de/mitmachen',
  '/en/research': '/de/forschung',
  '/en/museum': '/de/museum',
  '/en/contact': '/de/kontakt',
  '/en/research/publications': '/de/forschung/publikationen',
  '/en/research/people-search': '/de/forschung/personensuche',
  '/en/general-privacy-notice': '/de/datenschutzerklaerung',
  '/en/privacy-settings': '/de/datenschutzeinstellungen',
};

export const getTranslatedUrl = (currentPath, targetLang) => {
  if (!currentPath) return `/${targetLang}/`;

  // Remove the path prefix if it exists
  const pathPrefix = '/mfn-landingpages';
  const normalizedPath = currentPath
    .replace(pathPrefix, '')  // Remove path prefix if present
    .replace(/\/$/, '');      // Remove trailing slash
  
  let translatedPath;
  if (targetLang === 'en') {
    // Looking for German to English mapping
    if (normalizedPath.startsWith('/de/')) {
      translatedPath = urlMappings[normalizedPath] || `/${targetLang}${normalizedPath.slice(3)}`;
    } else {
      // Already an English path, keep it
      translatedPath = normalizedPath;
    }
  } else {
    // Looking for English to German mapping
    if (normalizedPath.startsWith('/en/')) {
      const matchingPair = Object.entries(urlMappings).find(([_, en]) => en === normalizedPath);
      translatedPath = matchingPair ? matchingPair[0] : `/${targetLang}${normalizedPath.slice(3)}`;
    } else {
      // Already a German path, keep it
      translatedPath = normalizedPath;
    }
  }

  // Clean up any double slashes and return without prefix
  return translatedPath.replace(/\/+/g, '/');
}; 