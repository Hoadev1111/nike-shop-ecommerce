/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '101': '1.01'
      }
    },
    screens: {
      'xxl': { 'max': '1600px' },
      'xl': { 'max': '1200px' },
      'lg': { 'max': '991px' },
      'md': { 'max': '767px' },
      'sm': { 'max': '550px' },
      'xsm': { 'max': '375px' }
    }
  },
  plugins: [],
}