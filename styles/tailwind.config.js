const colors = require("../node_modules/tailwindcss/colors");

module.exports = {
  content: ["_site/**/*.html", "js/**/*.js"],
  safelist: [],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      rose: colors.rose,
      pink: colors.pink,
      fuchsia: colors.fuchsia,
      purple: colors.purple,
      violet: colors.violet,
      indigo: colors.indigo,
      blue: colors.blue,
      lightBlue: colors.sky, // Only in Tailwind CSS <=v2.1
      sky: colors.sky, // As of Tailwind CSS v2.2, `lightBlue` has been renamed to `sky`
      cyan: colors.cyan,
      teal: colors.teal,
      emerald: colors.emerald,
      green: colors.green,
      lime: colors.lime,
      yellow: colors.yellow,
      amber: colors.amber,
      orange: colors.orange,
      red: colors.red,
      warmGray: colors.stone,
      trueGray: colors.neutral,
      gray: colors.gray,
      blueGray: colors.slate,
      coolGray: colors.gray,
      primary: "#30ab82",
      "primary-dark": "#213f35",
      secondary: "#ef8b58",
      accent: "#760826",
    },
    fontFamily: {
      "sans-inter": ["Inter", "sans-serif"],
      "sans-jost": ["Jost", "sans-serif"],
    },
  },
  variants: {
    // scale: ["responsive", "hover", "focus", "group-hover"],
    // textColor: ["responsive", "hover", "focus", "group-hover"],
    // opacity: ["responsive", "hover", "focus", "group-hover"],
    // backgroundColor: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [],
};
