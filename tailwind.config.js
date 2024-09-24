/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      gray: {
        0: '#ffffff',
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
        'gradient-init': '#1bb876',
        'gradient-end': '#1bb892',
        8: '#1bb876',
      },
      secondary: '#ff2b64',
      success: '#00a862',
      error: 'a83c00',
    },
    extend: {},
  },
  plugins: [],
};
