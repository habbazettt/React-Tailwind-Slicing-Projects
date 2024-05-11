/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkPrimary': '#00434C',
        'primary1': '#00707E',
        'primary2': '#43A5B2',
        'secondary1': '#D9EFF2',
        'secondary2': '#B1B1B1',
        'secondary3': '#6C6C6C',
      }
    },
  },
  plugins: [],
}