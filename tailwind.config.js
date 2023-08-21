/** @type {import('tailwindcss').Config} */
const twElements = require('tw-elements');
module.exports = {
  darkMode: 'class', // Set to 'class' to enable dark mode with class-based switching

  // Specify the content to process (HTML and JS files)
  content: [
    "./**/*.{html,js}",
     "./node_modules/tw-elements/dist/js/**/*.js"
  ],  

  // Specify plugins to use (include tw-elements plugin)
  plugins: [require("tw-elements/dist/plugin.cjs")],

  // Define your theme settings
  theme: {
    extend: {
      colors: {
        mainColor: '#DCC1AB',
        mainGreen: '#1B5B31',
        mainGray: '#F5F0EC',
        btnCol: '#F5F0EC'
      },
      width: {
        '1262': '1262px',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1028px',
        xl:'1440px'
      }
    },
  },
};


