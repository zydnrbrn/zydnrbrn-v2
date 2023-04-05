/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'righteous': ['righteous'],
      'work': ['work']
    },
    extend: {
      colors: {
        'main-red': '#637AFF'
      },
    },
  },
  plugins: [],
}
