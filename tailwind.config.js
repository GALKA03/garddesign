/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
   content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mainColor: '#DCC1AB',
        mainGreen: '#1B5B31',
        mainGray: '#F5F0EC',
        btnCol:'#F5F0EC'
      },
      width: {
        '1262': '1262px',
      },
    },
  },
  plugins: [],
}

