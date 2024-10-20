/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        tablet:'1235px',
        mobile: '870px',
        mobileXS: '680px'
      },
      colors:{
        myTeal: '#5eead4'
      }
    },
  },
  plugins: [],
}

