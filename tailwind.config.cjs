/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        'backGrownPrincipal': '#fdcae1',
        'secondaryColor' : '#cafde6',
        'Buttons': '#8f6277',
        'ButtonPrincipal': '#fff',


      },
      fontFamily: {
        'Quicksand': ['Quicksand', 'sans-serif']
      }
    },
  },
  plugins: [],
}
