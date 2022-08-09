/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mouseMemoirs: ['"Mouse Memoirs"', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        catamaran: ['Catamaran', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        squarePeg: ['"Square Peg"', 'cursive'],
      },
      colors: {
        placeholder: '#b1b1b1',
        test: 'rgb(var(--color-test) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      },
      screens: {
        tb: '960px', // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [],
};
