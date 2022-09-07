/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        'verde-gapy': '#5BB033',
        'pink1' : '#917691',
        'ping-bg': '#fff6ff',
        'green-complement': '#e0ffe0',


      },
      fontFamily: {
        'Quicksand': ['Quicksand', 'sans-serif']
      }
    },
  },
  plugins: [],
}