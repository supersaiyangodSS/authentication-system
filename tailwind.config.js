/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./views/**/*.{hbs,js}"],
  theme: {
    extend: {},
    extend: {
      colors: {
        mybg: '#393646',
        mybgs1: '#4F4557',
        mybgs2: '#6D5D6E',
        myaccent: '#F4EEE0',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    }
    },
  plugins: [],
}