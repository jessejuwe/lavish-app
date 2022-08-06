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
        'accent-1': '#333',
        brand: { DEFAULT: '#0fa9e6', light: '#3fbaeb', dark: '#0c87b8' },
        circa: 'rgb(var(--color-circa) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
