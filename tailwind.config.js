/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      h1: 24,
      h2: 18,
      h3: 16,
      h4: 14,
      body1: 13,
      body2: 12,
      body3: 11,
      body4: 10,
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      gray: {
        25: '#f7f7f7',
        50: '#f1f1f1',
        100: '#e1e1e1',
        200: '#c8c8c8',
        300: '#999999',
        400: '#666666',
        500: '#222222',
      },
      primary: {
        100: '#1bb876',
        8: '#1bb87614',
        4: '#1bb8760a',
      },
      secondary: '#ff2b64',
      success: '#00a862',
      error: '#a83c00',
    },
    extend: {},
  },
  plugins: [],
};
