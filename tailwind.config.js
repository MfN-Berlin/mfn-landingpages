/** @type {import('tailwindcss').Config} */
const { theme } = require('./src/styles/theme');

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      ...theme.extend,
      screens: {
        'sm': '650px',
        'md': '790px',
      },
      fontFamily: theme.fontFamily,
      fontSize: theme.fontSize,
      lineHeight: theme.lineHeight,
      colors: theme.colors,
      gap: {
        '18': '4.5rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem',
        // Add more custom gap values as needed
      },
    },
  },
  variants: {
    extend: {
      fontFamily: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.font-normal': {
          fontFamily: 'Trade Gothic Next LT W04 Rg, sans-serif',
        },
        '.font-bold': {
          fontFamily: 'Trade Gothic Next LT W04 Bold, sans-serif',
        },
        '.font-italic': {
          fontFamily: 'Trade Gothic Next LT W04 Itali, sans-serif',
        },
        '.font-bold-italic': {
          fontFamily: 'Trade Gothic Next LT W04 Bd It, sans-serif',
        },
        'strong': {
          fontFamily: 'Trade Gothic Next LT W04 Bold, sans-serif',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    function({ addComponents }) {
      addComponents({
        '.swiper-pagination-bullet': {
          '@apply w-3 h-3 bg-white opacity-70': {},
        },
        '.swiper-pagination-bullet-active': {
          '@apply opacity-100 bg-Green-500': {},
        },
      });
    },
  ],
};
