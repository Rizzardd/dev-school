/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'display': ['Philosopher'],
      'body': ['"sans-serif"']
    },
    extend: {
      colors: {
        'olive-color': '#A6E6A7',
        'header-color': '#8EE695',
        'olive-body': '#D3E4CE'        
      },
    },
  },
  plugins: [],
}
