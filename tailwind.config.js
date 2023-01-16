/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          md: '4rem',
          lg: '6rem',
          xl: '8rem',
          '2xl': '10rem',
        }
      },
      colors: {
        'villa': '#e61c5d'
      },
      fontFamily: {
        'f1': ['playfair-display', 'serif']
      },
      backgroundImage: {
        'main': 'url("https://preview.colorlib.com/theme/villa/img/hero_1.jpg.webp")',
        'round': 'url("https://preview.colorlib.com/theme/villa/img/round.png.webp")',
        'common': 'url("https://preview.colorlib.com/theme/villa/img/hero_2.jpg.webp")',
      }
    },
  },
  plugins: [],
}
