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
  console.log('getTranslatedUrl called with:', { currentPath, targetLang });

  if (!currentPath) return `/${targetLang}/`;

  // Remove trailing slash for consistency in lookup
  const normalizedPath = currentPath.replace(/\/$/, '');
  console.log('normalizedPath:', normalizedPath);
  
  if (targetLang === 'en') {
    // Looking for German to English mapping
    console.log('Looking for German to English mapping');
    console.log('Direct mapping result:', urlMappings[normalizedPath]);
    return urlMappings[normalizedPath] || `/${targetLang}${currentPath.slice(3)}`;
  } else {
    // Looking for English to German mapping
    console.log('Looking for English to German mapping');
    const matchingPair = Object.entries(urlMappings).find(([_, en]) => en === normalizedPath);
    console.log('Found matching pair:', matchingPair);
    if (matchingPair) {
      return matchingPair[0]; // Return the German URL
    }
    return `/${targetLang}${currentPath.slice(3)}`;
  }
}; 