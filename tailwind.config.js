/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily:{
        Geist:'"Geist Mono", monospace'
      },
      backgroundImage:{
        'mainLight':"url('/public/roofBg.jpg')"
      }
    },
  },
  plugins: [],
}

