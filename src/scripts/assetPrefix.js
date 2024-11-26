export const getAssetPath = (path) => {
    const prefix = process.env.NODE_ENV === 'production' 
      ? 'https://mfn-berlin.github.io/mfn-landingpages'
      : '';
    return `${prefix}${path}`;
  };