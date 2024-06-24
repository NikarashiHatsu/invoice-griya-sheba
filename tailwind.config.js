const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["'Lexend'", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["emerald", "forest"],
  }
}

