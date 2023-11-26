/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      grey: {
        700: "#808080",
        500: "#1F1F1F80",
        350: "#00000059",
      },
      black: "#1F1F1F",
      dark_black:"#000000",
      yellow: "#FF9E2C",
    },
    extend: {},
  },
  plugins: [],
};
