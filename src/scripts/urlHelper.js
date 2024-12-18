import { getLanguageFromPath } from './languageManager';
import { getTranslatedUrl } from '../data/urlMappings';

// Tracking für rekursive Aufrufe
let isDebugging = false;

const debugUrl = (prefix = '') => {
  // Verhindere rekursive Debug-Aufrufe
  if (isDebugging) return;
  isDebugging = true;

  try {
    if (typeof window === 'undefined') {
      console.group('🔍 URL Debug (SSR)');
      console.log('Environment: Server Side Rendering');
      console.log('Default Config:', {
        pathPrefix: '',
        hostname: 'mfn-berlin.github.io'
      });
      console.groupEnd();
      return;
    }

    // Ein einzelner Debug-Block pro URL-Operation
    console.group(`🔍 URL Debug ${prefix}`);
    
    // Alle Debug-Informationen in einem Objekt sammeln
    const debugInfo = {
      url: {
        full: window.location.href,
        pathname: window.location.pathname,
        search: window.location.search,
        hash: window.location.hash,
        origin: window.location.origin
      },
      environment: {
        hostname: window.location.hostname,
        port: window.location.port || '(default)',
        protocol: window.location.protocol,
        type: getEnvironmentType()
      },
      language: {
        currentPath: window.location.pathname,
        detected: getLanguageFromPath(window.location.pathname),
        translations: getAvailableTranslations(window.location.pathname)
      },
      path: {
        segments: window.location.pathname.split('/').filter(Boolean),
        depth: window.location.pathname.split('/').filter(Boolean).length,
        base: getBasePath(),
        prefix: getEnvironmentConfig().pathPrefix
      },
      navigation: {
        referrer: document.referrer,
        type: getNavigationType(),
        timing: window.performance ? window.performance.getEntriesByType('navigation')[0] : null
      }
    };

    // Übersichtliche Ausgabe
    console.table(debugInfo.url);
    console.table(debugInfo.environment);
    console.table(debugInfo.language);
    console.table(debugInfo.path);
    console.table(debugInfo.navigation);

    console.groupEnd();
  } finally {
    // Debug-Status zurücksetzen
    isDebugging = false;
  }
};

// Helper functions
const getEnvironmentType = () => {
  const hostname = window.location.hostname;
  if (hostname === 'mfn-berlin.github.io') return 'GitHub Pages';
  if (hostname === 'localhost') return 'Local Development';
  if (hostname.includes('test')) return 'Test Environment';
  return 'Production';
};

const getBasePath = () => {
  const config = getEnvironmentConfig();
  return config.pathPrefix || '';
};

const getNavigationType = () => {
  if (window.performance) {
    const navigation = window.performance.getEntriesByType('navigation')[0];
    return navigation ? navigation.type : 'unknown';
  }
  return 'unknown';
};

const getAvailableTranslations = (path) => {
  const translations = {
    de: getTranslatedUrl(path, 'de'),
    en: getTranslatedUrl(path, 'en')
  };
  return translations;
};

export const getEnvironmentConfig = () => {
  if (typeof window === 'undefined') {
    debugUrl('(SSR)');
    return {
      pathPrefix: '',
      hostname: 'mfn-berlin.github.io'
    };
  }
  
  const hostname = window.location.hostname;
  debugUrl('(Config)');
  
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
  debugUrl('(Generate URL)');
  
  // If it's an external URL, return as is
  if (to.startsWith('http')) {
    console.log('External URL detected:', to);
    return to;
  }
  
  // If the URL already has a language prefix, use it
  if (to.startsWith('/de/') || to.startsWith('/en/')) {
    console.log('URL with language prefix detected:', to);
    return to;
  }
  
  // Default to German for paths without language prefix
  const finalUrl = `/de${to}`;
  console.log('Generated URL:', finalUrl);
  return finalUrl;
}; 