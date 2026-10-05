const plugin = require("tailwindcss/plugin");

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
      // Tailwind 3.3 only ships 10-step opacities; the style demos use 5-steps.
      opacity: {
        15: "0.15",
        35: "0.35",
        45: "0.45",
        55: "0.55",
        65: "0.65",
        85: "0.85",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [
    // Website-style demos respond to the width of their preview frame, not the
    // viewport, so one demo can render as desktop in a card and mobile in a
    // phone frame. `cq-*` variants target the `demo` container (see DemoRoot).
    plugin(({ addVariant }) => {
      addVariant("cq-sm", "@container demo (min-width: 640px)");
      addVariant("cq-md", "@container demo (min-width: 768px)");
      addVariant("cq-lg", "@container demo (min-width: 1024px)");
      addVariant("cq-xl", "@container demo (min-width: 1200px)");
    }),
  ],
};
