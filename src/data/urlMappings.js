// Mapping zwischen deutschen und englischen URLs
export const urlMappings = {
  // Hauptnavigation
  '/de/besuch-planen': '/en/visit',
  '/de/mitmachen': '/en/participate',
  '/de/forschung': '/en/research',
  '/de/museum': '/en/museum',

  // Besuch planen / Visit
  '/de/besuch-planen/ausstellungen': '/en/visit/exhibitions',
  '/de/museum/besuch-planen': '/en/museum/plan-your-visit',
  '/de/museum/besuch-planen/anfahrt': '/en/museum/besucherinformationen/how-get-here',
  '/de/museum/besuch-planen/barrierefreiheit': '/en/museum/plan-your-visit/accessibility',
  '/de/museum/besuch-planen/besuchendenordnung': '/en/museum/plan-your-visit/visitors-regulations',
  '/de/museum/besuch-planen/digital-guide': '/en/museum/plan-your-visit/digital-guide',
  '/de/museum/besuch-planen/fotografieren-und-filmaufnahmen': '/en/museum/plan-your-visit/film-and-photography',
  '/de/museum/besuch-planen/museumscafe': '/en/museum/plan-your-visit/museum-cafe',

  // Mitmachen / Participate
  '/de/museum/mitmachen/buergerwissenschaften': '/en/museum/participate/citizen-science',
  '/de/mitmachen/ehrenamtliches-engagement': '/en/museum/participate/citizen-science/volunteering',
  '/de/mitmachen/bildung': '/en/museum/education',

  // ... weitere Mappings entsprechend der Navigation
};

// Reverse mapping für EN -> DE
export const reverseUrlMappings = Object.entries(urlMappings).reduce((acc, [de, en]) => {
  acc[en] = de;
  return acc;
}, {});

// Helper function to get translated URL
export const getTranslatedUrl = (currentUrl, targetLang) => {
  if (targetLang === 'en') {
    return urlMappings[currentUrl] || `/en${currentUrl.substring(3)}`;
  } else {
    return reverseUrlMappings[currentUrl] || `/de${currentUrl.substring(3)}`;
  }
}; 