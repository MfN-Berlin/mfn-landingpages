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

  // Leichte Sprache to German
  '/leichte-sprache/': '/de/',
  '/leichte-sprache/besuch-planen': '/de/besuch-planen',
  '/leichte-sprache/mitmachen': '/de/mitmachen',
  '/leichte-sprache/forschung': '/de/forschung',
  '/leichte-sprache/museum': '/de/museum',
  '/leichte-sprache/kontakt': '/de/kontakt',
  '/leichte-sprache/forschung/publikationen': '/de/forschung/publikationen',
  '/leichte-sprache/forschung/personensuche': '/de/forschung/personensuche',
  '/leichte-sprache/datenschutzerklaerung': '/de/datenschutzerklaerung',
  '/leichte-sprache/datenschutzeinstellungen': '/de/datenschutzeinstellungen',

  // German to Leichte Sprache
  '/de/': '/leichte-sprache/',
  '/de/besuch-planen': '/leichte-sprache/besuch-planen',
  '/de/mitmachen': '/leichte-sprache/mitmachen',
  '/de/forschung': '/leichte-sprache/forschung',
  '/de/museum': '/leichte-sprache/museum',
  '/de/kontakt': '/leichte-sprache/kontakt',
  '/de/forschung/publikationen': '/leichte-sprache/forschung/publikationen',
  '/de/forschung/personensuche': '/leichte-sprache/forschung/personensuche',
  '/de/datenschutzerklaerung': '/leichte-sprache/datenschutzerklaerung',
  '/de/datenschutzeinstellungen': '/leichte-sprache/datenschutzeinstellungen'
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
    } else if (normalizedPath.startsWith('/leichte-sprache/')) {
      // Map Leichte Sprache to English via German
      const germanPath = urlMappings[normalizedPath];
      translatedPath = urlMappings[germanPath] || `/${targetLang}${germanPath.slice(3)}`;
    } else {
      // Already an English path, keep it
      translatedPath = normalizedPath;
    }
  } else if (targetLang === 'leichte-sprache') {
    // Looking for German to Leichte Sprache mapping
    if (normalizedPath.startsWith('/de/')) {
      translatedPath = urlMappings[normalizedPath] || `/${targetLang}${normalizedPath.slice(3)}`;
    } else if (normalizedPath.startsWith('/en/')) {
      // Map English to Leichte Sprache via German
      const germanPath = urlMappings[normalizedPath];
      translatedPath = urlMappings[germanPath] || `/${targetLang}${germanPath.slice(3)}`;
    } else {
      // Already a Leichte Sprache path, keep it
      translatedPath = normalizedPath;
    }
  } else {
    // Looking for English to German mapping
    if (normalizedPath.startsWith('/en/')) {
      const matchingPair = Object.entries(urlMappings).find(([_, en]) => en === normalizedPath);
      translatedPath = matchingPair ? matchingPair[0] : `/${targetLang}${normalizedPath.slice(3)}`;
    } else if (normalizedPath.startsWith('/leichte-sprache/')) {
      // Map Leichte Sprache to German
      translatedPath = urlMappings[normalizedPath] || `/${targetLang}${normalizedPath.slice(15)}`;
    } else {
      // Already a German path, keep it
      translatedPath = normalizedPath;
    }
  }

  // Clean up any double slashes and return without prefix
  return translatedPath.replace(/\/+/g, '/');
}; 