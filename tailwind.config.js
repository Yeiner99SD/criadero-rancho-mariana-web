/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px'
      },
    },
    screens:{
      sm: '640px',
      md:'768px',
      lg: '960px',
      xl: '1200px'
    },
    backgroundImage:{
      hero: 'url(/images/finca.webp)',
      heroescuela: 'url(/images/poster.webp)',
      escuela: 'url(/images/imagenescuelaRM.png)'
    },
    extend: {
      colors: {
        primary: '#1E1E1E',
        secondary: '#B89F5C',
        header: '#A18262',
        headergradiant: '#3B3024',
        special: '#B89F5C'
      }
    },
  },
  plugins: [],
}

