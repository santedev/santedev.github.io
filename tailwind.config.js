/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "public/scripts/**/*.js"],
  daisyui: {
    themes: [],
  },
  theme: {
    extend: {
      colors: {
        blueSolid: "#0d1117",
        greenEnergic: "#8bffd3",
        whiteGreen: "#d1dbd7"
      },
    },
  },
  plugins: [require("daisyui")],
};