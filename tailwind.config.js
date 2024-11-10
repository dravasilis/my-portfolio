/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        laptop:'1400px',
        tablet:'1235px',
        mobile: '870px',
        mobileXS: '680px',
        mobileXXS: '580px'
      },
      colors:{
        myTeal: '#5eead4'
      }
    },
  },
  plugins: [],
}

