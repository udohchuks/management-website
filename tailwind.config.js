/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'vietnam': ['Be Vietnam Pro', 'sans-serif']
      },
      colors: {
        'primary-bright-red': 'hsl(12, 88%, 59%)',
        'primary-dark-blue': 'hsl(228, 39%, 23%)',
        'secondary-gray-blue': 'hsl(227, 12%, 61%)',
        'secondary-very-dark-blue': ' hsl(233, 12%, 13%)',
        'secondary-pale-red': 'hsl(13, 100%, 96%)',
        'secondary-light-grey': 'hsl(0, 0%, 98%)',
      },
      backgroundImage: {
        'illustration-mobile': "url('images/bg-simplify-section-mobile.svg')",
        'illustration-tablet': "url('images/bg-tablet-pattern.svg')",
        'illustration-desktop': "url('images/bg-simplify-section-desktop.svg')",
      }
    },
  },
  plugins: [],
}

