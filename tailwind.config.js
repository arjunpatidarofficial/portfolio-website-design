/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#171717",
        primary: "#242424",
        secondary: "#3D3D3D",
        ternary: "#4C4C4C",
        quaternary: "#5F5F5F",
        customorange: "#F58B05",
      },
    },
  },
  plugins: [],
};
