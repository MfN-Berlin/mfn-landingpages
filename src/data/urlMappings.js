export const urlMappings = {
  // Base mappings for German <-> English
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

  // English to German (reverse mappings)
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

  // Additional mappings for Leichte Sprache
  '/leichte-sprache/': {
    de: '/de/',
    en: '/en/'
  },
  '/leichte-sprache/besuch-planen': {
    de: '/de/besuch-planen',
    en: '/en/visit'
  },
  '/leichte-sprache/mitmachen': {
    de: '/de/mitmachen',
    en: '/en/participate'
  },
  '/leichte-sprache/forschung': {
    de: '/de/forschung',
    en: '/en/research'
  },
  '/leichte-sprache/museum': {
    de: '/de/museum',
    en: '/en/museum'
  },
  '/leichte-sprache/kontakt': {
    de: '/de/kontakt',
    en: '/en/contact'
  },
  '/leichte-sprache/forschung/publikationen': {
    de: '/de/forschung/publikationen',
    en: '/en/research/publications'
  },
  '/leichte-sprache/forschung/personensuche': {
    de: '/de/forschung/personensuche',
    en: '/en/research/people-search'
  },
  '/leichte-sprache/datenschutzerklaerung': {
    de: '/de/datenschutzerklaerung',
    en: '/en/general-privacy-notice'
  },
  '/leichte-sprache/datenschutzeinstellungen': {
    de: '/de/datenschutzeinstellungen',
    en: '/en/privacy-settings'
  }
};

export const getTranslatedUrl = (currentPath, targetLang) => {
  if (!currentPath) return `/${targetLang}/`;

  // Remove the path prefix if it exists
  const pathPrefix = '/mfn-landingpages';
  const normalizedPath = currentPath
    .replace(pathPrefix, '')  // Remove path prefix if present
    .replace(/\/$/, '');      // Remove trailing slash

  // Wenn das Ziel Leichte Sprache ist, müssen wir:
  // 1. Erst den deutschen Pfad finden (falls wir auf einer englischen Seite sind)
  // 2. Dann den deutschen Pfad in einen Leichte-Sprache-Pfad umwandeln
  if (targetLang === 'leichte-sprache') {
    let germanPath = normalizedPath;
    
    // Wenn wir auf einer englischen Seite sind, finden wir erst den deutschen Pfad
    if (normalizedPath.startsWith('/en/')) {
      germanPath = urlMappings[normalizedPath];
      if (!germanPath) {
        return `/leichte-sprache${normalizedPath.slice(normalizedPath.indexOf('/', 1))}`;
      }
    }
    
    // Jetzt wandeln wir den deutschen Pfad in einen Leichte-Sprache-Pfad um
    return germanPath.replace('/de/', '/leichte-sprache/');
  }
  
  // Standard-Sprachmappings für Deutsch und Englisch
  if (targetLang === 'en' && normalizedPath.startsWith('/de/')) {
    const mapping = urlMappings[normalizedPath];
    if (mapping && mapping.startsWith('/en/')) {
      return mapping;
    }
  }
  
  if (targetLang === 'de' && normalizedPath.startsWith('/en/')) {
    const mapping = urlMappings[normalizedPath];
    if (mapping && mapping.startsWith('/de/')) {
      return mapping;
    }
  }

  // Fallback: replace language prefix
  const pathWithoutLang = normalizedPath.slice(normalizedPath.indexOf('/', 1));
  return `/${targetLang}${pathWithoutLang}`;
}; 