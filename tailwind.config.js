/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "../src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#1E293B',
          200: '#0F172A',
        }
      }
    },
  },
  plugins: [],
}
