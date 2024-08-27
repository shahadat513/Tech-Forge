/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Lato: ['Lato', 'sans-serif'],
        Amsterdam: ['New Amsterdam', 'sans-serif']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

