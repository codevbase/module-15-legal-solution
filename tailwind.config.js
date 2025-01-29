/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
          garamond: ["EB Garamond", "serif"],
        },

        colors:{
          primaryColor :'rgba(182, 140, 90, 1.00)',
        },
      },
    },
    plugins: [],
  };
  