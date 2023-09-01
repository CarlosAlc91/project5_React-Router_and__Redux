/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'trainer': '#FE1936',
        'black-home': '#302F2F',
        'btn-red': '#D93F3F',
        'option': '#ED8F8F',
        'h-line': '#D3D3D3',
        'b-line': '#416460'
      }
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif']
    }
  },
  plugins: [],
}

