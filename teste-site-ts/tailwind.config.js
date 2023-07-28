/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': ['"Philosopher"', "'sans-serif'"]
    },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
    extend: {
      colors: {
        'header-border-blue': 'rgb(10, 79, 109)',
        'first-gradient-bg': 'rgb(39, 69, 97)',
        'last-gradient-bg': 'rgb(20, 33, 50)',
        'border-color': 'rgb(111, 134, 147)',
        'menu-button-color': 'rgb(251, 254, 182)',
        'text-button-color': 'rgb(36, 65, 110)',
        'characters': 'rgb(252, 231, 121)',
        'video-border-color': 'rgb(87, 120, 167)',
        'divider-color': 'rgb(231, 213, 178)'
      },
    },
  },
  plugins: [],
}


