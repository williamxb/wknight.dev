const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.js"],
  target: "relaxed",
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      cyan: colors.cyan,
      rose: colors.rose,
      white: colors.white,
      blue: colors.blue
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
