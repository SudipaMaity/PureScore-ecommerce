/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite/**/*.js' // Add this line
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#202E99',
          '50': '#EBF2FF',
          '100': '#D1DEFF',
          '200': '#A3B8FF',
          '300': '#7592FF',
          '400': '#476CFF',
          '500': '#1E3A8A',
          '600': '#14285C',
          '700': '#0C1836',
          '800': '#040810',
          '900': '#000000'
        }
      },
      fontFamily: {
        campton: ['Campton', 'sans-serif'],
        atype: ['Atype', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
