/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollBehavior: ["smooth"],
      backgroundImage: {
        FooterA: "url('src/assets/FooterA.png')",
        FooterB: "url('src/assets/FooterB.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
