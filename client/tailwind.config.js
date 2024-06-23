/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      colors: {
        lightGrey: "#f7F7F7",
        mediumBlue: "#257AF5",
        lightBlue: "rgb(232,241,254)",
        darkBlue: "rgb(46,50,62)",
        extraDark: "rgb(30,33,40)",
        lightPurple: "#F5F5FC",
      },
    },
  },
  plugins: [],
}