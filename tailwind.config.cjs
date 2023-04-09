/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        leagueSpartan: ["League Spartan", "sans-serif"],
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    colors: {
      desatDarkCyan: "hsl(180, 29%, 50%)",
      lightGrayCyanBg: "hsl(180, 52%, 96%)",
      lightGrayCyanTag: "hsl(180, 31%, 95%)",
      darkGrayCyan: "hsl(180, 8%, 52%)",
      veryDarkGrayCyan: "hsl(180, 14%, 20%)",
      white: "hsl(0, 0%, 100%)",
    },

    backgroundImage: {
      headerBg: "url(../../src/assets/bg-header-desktop.svg)",
      headerMobBg: "url(../../src/assets/bg-header-mobile.svg)",
    },
  },
  plugins: [],
};
