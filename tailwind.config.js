/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        /* The name you give it here dictates the Tailwind class. 
           'futura' becomes 'font-futura' */
        futura: ['MyCustomFutura', 'sans-serif'],
      }
    },
  },
  plugins: [],
}