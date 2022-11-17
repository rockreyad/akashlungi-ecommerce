/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        futura: ["Futura", "sans-serif"],
        futuralight: ["Futura Light", "sans-serif"],
        futuraCondensed: ["Futura Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
