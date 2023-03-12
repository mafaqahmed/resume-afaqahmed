/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'myblack': '#1B1B1B',
        'myBlue': '#022559',
        'myLightBlue': '#172A45',
      },
      width: {
        'headerW': '97%'
      },
      height: {
        'box2': '100px',
        'box3': '100%'
      },
      screens: {
        'mylg': '1135px',
      },
      listStyleType: {
        square: 'square',
      }
      },
  },
  plugins: [],
}