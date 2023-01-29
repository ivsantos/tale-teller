/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/assets/images/background.png')",
      },
    },
  },
  plugins: [],
};
