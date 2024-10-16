/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}","*.html"],
  theme: {
    extend: {
      boxShadow: {
        "shadow-1" : "0px 10px 20px 2px rgba(130,130,130,0.8)"
      },
      colors: {
        "grey": "#444444",
        "grey-lightest": "#fafafa",
        "purple": "#853b8f",
        "purple-light": "#ad5eb8",
      },
      fontFamily: {
        "montserrat": ["montserrat"],
        "montserrat-light": ["montserrat-light"],
        "montserrat-bold": ["montserrat-bold"],
      }
    },
  },
  plugins: [],
}

