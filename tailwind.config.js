/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'custom-width': '150px',
        'width': '345px'
      },
      height: {
        'custom-height': '383px',
        'height': '253px',
      },
      backgroundColor:{
        'dark-grey': '#141414',
      },
      inset: {
        'custom-left': '101px',
        'left': '500px',
        'left': '15px'
      },
      opacity: {
        'custom-opacity': '0',
      },
    },
  },
  plugins: [],
}

