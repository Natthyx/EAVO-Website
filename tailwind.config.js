/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'FooterA': "url('src/assets/FooterA.png')",
        'FooterB': "url('src/assets/FooterB.png')",
      }
    },
  },
  plugins: [],
}
