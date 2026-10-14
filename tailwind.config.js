/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f4ff',
          100: '#e0e9fe',
          200: '#c7d7fe',
          300: '#a4bcfc',
          400: '#7c98f9',
          500: '#5873f4',
          600: '#4052e6',
          700: '#343fc9',
          800: '#2d36a2',
          900: '#2a3180',
          950: '#1a1d4d',
        }
      }
    },
  },
  plugins: [],
}
