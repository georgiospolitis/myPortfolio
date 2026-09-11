/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        cream: "#F7F4EE",
        paper: "#FBF9F5",
        ink: "#171412",
        stone: "#8A8478",
        line: "#E4DFD4",
        clay: {
          DEFAULT: "#C1502E",
          dark: "#A3411F",
          light: "#E8C4B4",
        },
        sage: "#5B6650",
      },
      fontFamily: {
        serif: ["Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      screens: {
        xs: "450px",
      },
      boxShadow: {
        soft: "0px 20px 60px -20px rgba(23, 20, 18, 0.18)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
