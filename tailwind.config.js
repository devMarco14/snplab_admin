/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blackFont: '#141414',
        lightgrayFont: '#e1e1e1',
        grayFont: '#c0c0c0',
        buttonInactive: '#f5f5f5',
        buttonActive: '#4b4b4b',
        listSelected: '#f7f6fb',
        searchBorder: '#4d647c',
      },
      screens: {
        xsmall: '480px',
        small: '740px',
        medium: '1160px',
        large: '1500px',
        xlarge: '1640px',
        xxlarge: '2020px',
      },
      fontSizes: {
        xsmall: '10px',
        small: '12px',
        medium: '14px',
        large: '16px',
        xlarge: '18px',
        xxlarge: '20px',
      },
    },
  },
  plugins: [],
};
