/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        laptop: '1367px',
        tablet: '801px',
        mobile: '451px',
      },
      fontFamily: {
        bellefair: ['Bellefair', 'serif'],
        barlow: ['Barlow', 'sans-serif'],
        barlowCondensed: ['Barlow Condensed', 'sans-serif'],
      },
      colors: {
        textColor: '#D0D6F9',
      },
      keyframes: {
        summon: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        rotation: {
          from: { transform: 'rotate(0)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        summon: 'summon ease-in-out 1s forwards',
        rotation: 'rotation linear 60s infinite',
      }
    },
  },
  plugins: [],
}

