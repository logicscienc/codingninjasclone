/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slideInRight: 'slideInRight 0.3s ease-out forwards',
      },
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'dotted-pattern': 'repeating-linear-gradient(to bottom, #ccc 0px, #ccc 2px, transparent 2px, transparent 6px)',
      },
    },
  },
  plugins: [],
}

