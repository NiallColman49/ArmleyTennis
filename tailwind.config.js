/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}", "./node_modules/tw-elements/dist/js/*.js"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Formular Medium"],
        body: ["Formular"],
      },
      colors: {
        armleyGreen: "#566548",
        armleyBlack: "#0f0d0c",
        armleyNeon: "#e5e771",
        armleyWhite: "#ffffff",
      },
      lineHeight: {
        1.2: "1.2",
      },
      screens: {
        specialScreen: "1500px",
      },
    },
  },
  plugins: [],
};
