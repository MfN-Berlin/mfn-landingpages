const theme = { 
  colors: {
    Black: { 
      '100': '#f1f1f1',
      '300': '#bababa',
      '500': '#8c8c8c',
      '700': '#5f5f5f',
      '900': '#1a1a1a',
      '000': '#ffffff' 
    },
    Green: { 
      '100': '#f7f9f0',
      '200': '#d5e0b2',
      '300': '#b9cc80',
      '400': '#9cb74d',
      '500': '#729800',
      '600': '#587208',
      '700': '#46590d',
      '800': '#344012',
      '900': '#1f2218' 
    },
    Blue: { 
      '100': '#f0f9fb',
      '200': '#b3e0e9',
      '300': '#80cbdb',
      '400': '#4db6cd',
      '500': '#0197b7',
      '600': '#097288',
      '700': '#0e5969',
      '800': '#134049',
      '900': '#192223' 
    },
    Yellow: '#e6e600',
    DarkGreen: '#3d9475',
    Teal: '#81cfdb',
    DarkBlue: '#00627f',
    Orange: '#f47921',
    Red: '#e80029',
    Violet: '#95559a',
    Opal: '#072f3a',
    White: { White: '#ffffff' } 
  },
  fontSize: { 
    '2xs': '0.75rem',
    xs: '0.875rem',
    sm: '1rem',
    base: '1.125rem',
    lg: '1.3125rem',
    xl: '1.5rem',
    '2xl': '1.6875rem',
    '3xl': '2.75rem',
    '4xl': '3.125rem' 
  },
  fontFamily: {
    'tradegothic-bold': ['Trade Gothic Next LT W04 Bold', 'sans-serif'],
    'tradegothic': ['Trade Gothic Next LT W04 Rg', 'sans-serif'],
    'tradegothic-italic': ['Trade Gothic Next LT W04 Itali', 'sans-serif'],
    'tradegothic-bold-italic': ['Trade Gothic Next LT W04 Bd It', 'sans-serif'],
  },
  lineHeight: {
    'auto': 'auto',
    '21': '21px',
    '24': '24px',
    '44': '44px',
    '50': '50px',
    'none': '1',
    'tight': '1.25',
    'normal': '1.5',
    'relaxed': '1.625',
  },
  extend: {
    typography: {
      'h1': {
        fontFamily: 'Trade Gothic Next LT W04 Bold',
        fontWeight: 'bold',
        lineHeight: '50px',
        fontSize: '3.125rem',
        letterSpacing: 'normal',
      },
      'h1-small': {
        fontFamily: 'Trade Gothic Next LT W04 Bold',
        fontWeight: 'bold',
        lineHeight: '44px',
        fontSize: '2.5rem',
        letterSpacing: 'normal',
      },
      'h2': {
        fontFamily: 'Trade Gothic Next LT W04 Bold',
        fontWeight: 'bold',
        lineHeight: '24px',
        fontSize: '1.6875rem',
        letterSpacing: 'normal',
      },
      'h3': {
        fontFamily: 'Trade Gothic Next LT W04 Bold',
        fontWeight: 'bold',
        lineHeight: '24px',
        fontSize: '1.5rem',
        letterSpacing: 'normal',
      },
      'h4': {
        fontFamily: 'Trade Gothic Next LT W04 Bold',
        fontWeight: 'bold',
        lineHeight: '24px',
        fontSize: '1.3125rem',
        letterSpacing: 'normal',
      },
      'p': {
        fontFamily: 'Trade Gothic Next LT W04 Rg',
        fontWeight: 'normal',
        lineHeight: '21px',
        fontSize: '1.125rem',
        letterSpacing: 'normal',
      },
      'p-small': {
        fontFamily: 'Trade Gothic Next LT W04 Rg',
        fontWeight: 'normal',
        lineHeight: 'auto',
        fontSize: '1rem',
        letterSpacing: 'normal',
      },
      'kicker': {
        fontFamily: 'Trade Gothic Next LT W04 Bold',
        fontWeight: 'bold',
        lineHeight: '24px',
        fontSize: '0.75rem',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
      },
      'kicker-small': {
        fontFamily: 'Trade Gothic Next LT W04 Bold',
        fontWeight: 'bold',
        lineHeight: '24px',
        fontSize: '0.625rem',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
      },
      'button': {
        fontFamily: 'Trade Gothic Next LT W04 Bold',
        fontWeight: 'bold',
        lineHeight: '24px',
        fontSize: '1rem',
        letterSpacing: 'normal',
      },
    },
  },
};

 module.exports = { theme };
