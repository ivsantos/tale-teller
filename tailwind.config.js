/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/assets/images/background.png')",
        stars: "url('/assets/images/stars.png')",
        tavern: "url('/assets/images/tavern.png')",
        cat: "url('/assets/images/cat.png')",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
        shake: {
          '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
          '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
          '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
          '40%, 60%': { transform: 'translate3d(4px, 0, 0)' },
        },
      },
      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
        shake: 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
      },
    },
  },
  plugins: [],
};
