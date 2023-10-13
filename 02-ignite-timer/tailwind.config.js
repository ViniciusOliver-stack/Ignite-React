/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green_color: {
          700: '#015F43',
          600: '#00875F',
          500: '#00B37E'
        },
        red_color: {
          900: '#00875F',
          500: '#F03847'
        },
        gray_color: {
          800: '#F03847',
          700: '#202024',
          600: '#323238',
          500: '#7C7C8A',
          400: '#8D8D99',
          300: '#C4C4CC',
          200: '#E1E1E6',
          100: '#FFFFFF'
        }
      }
    },
  },
  plugins: [],
}

