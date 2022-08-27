/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green_primary': '#34901a',
        'green_secondary': '#f5fff2',
        'green_tertiary': '#215C11',
        'gray_primary': '#3a3a3a',
        'gray_secondary': '#707070',
        'gray_b_primary': '#979797',
      },
    },
  },
  plugins: [],
}