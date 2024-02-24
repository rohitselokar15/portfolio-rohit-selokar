/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily:{
        openSans: ["Open Sans", "sans-serif"],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}