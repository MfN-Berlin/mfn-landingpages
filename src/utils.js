export const getLanguageFromPath = (pathname) => {
  if (!pathname) return 'de';
  
  if (pathname.startsWith('/leichte-sprache')) {
    return 'de-x-ls';
  }
  
  const pathParts = pathname.split('/');
  const lang = pathParts[1];
  return lang === 'en' ? 'en' : 'de';
}; 