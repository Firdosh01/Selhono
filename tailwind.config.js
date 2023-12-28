/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      DMSerif: ["DM Serif Display"],
      Jost: ["Jost"],
      Inter: ["Inter"]
    },
    colors: {
      black: "#292F36",
      richBlack: "#4D5053",
      white: "#FFF",
      burlywood: {
        50: "#CDA274",
        100: "#D8A876",
        150: "#C76904",
      }
    },
    extend: {},
  },
  plugins: [],
}