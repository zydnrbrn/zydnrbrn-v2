/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'righteous': ['Righteous'],
      'work': ['Work Sans']
    },
    extend: {
      colors: {
        'main-red': '#637AFF'
      },
    },
  },
  plugins: [],
}
