/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ['Bellefair', 'serif'],
        barlow: ['Barlow', 'sans-serif'],
        barlowCondensed: ['Barlow Condensed', 'sans-serif'],
      },
      colors: {
        textColor: '#D0D6F9',
      },
      keyframes: {
        rotation: {
          from: { transform: 'rotate(0)' },
          to: { transform: 'rotate(360deg)' },
        },
        summon: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        }
      },
      animation: {
        rotation: 'rotation 60s linear infinite',
        summon: 'summon 1s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}

