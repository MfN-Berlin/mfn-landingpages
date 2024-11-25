export const LANGUAGES = {
  DE: 'de',
  EN: 'en'
};

export const DEFAULT_LANGUAGE = LANGUAGES.DE;

export const getLanguageFromPath = (path) => {
  if (!path) return DEFAULT_LANGUAGE;
  
  const matches = path.match(/^\/(en|de)\//);
  
  if (matches && matches[1]) {
    return matches[1];
  }
  
  return DEFAULT_LANGUAGE;
};

export const switchLanguagePath = (currentPath, targetLang) => {
  if (!currentPath) return `/${targetLang}/`;
  
  const currentLang = getLanguageFromPath(currentPath);
  
  if (!currentPath.startsWith('/de/') && !currentPath.startsWith('/en/')) {
    return `/${targetLang}${currentPath}`;
  }
  
  return currentPath.replace(`/${currentLang}/`, `/${targetLang}/`);
};

export const getNavigationData = (language) => {
  const navigationKeyMap = {
    'besuch': 'visit',
    'mitmachen': 'participate',
    'forschung': 'research',
    'museum': 'museum'
  };

  if (language === LANGUAGES.EN) {
    const { topNavLinksEn, mainNavDataEn } = require('../data/navigationDataEn');
    return {
      topNavLinks: topNavLinksEn,
      mainNavData: mainNavDataEn,
      navigationKeyMap
    };
  }
  
  const { topNavLinks, mainNavData } = require('../data/navigationData');
  return {
    topNavLinks,
    mainNavData,
    navigationKeyMap
  };
}; 