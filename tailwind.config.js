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
        sweep: 'sweep 4s ease-in-out infinite',
        scrollX: 'scrollX 30s linear infinite', // ✅ Added scrollX animation
      },
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        sweep: {
          '0%, 100%': { backgroundPosition: '200% center' },
          '50%': { backgroundPosition: '-200% center' },
        },
        scrollX: { // ✅ Added scrollX keyframes
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'dotted-pattern': 'repeating-linear-gradient(to bottom, #ccc 0px, #ccc 2px, transparent 2px, transparent 6px)',
      },
    },
  },
  plugins: [],
}



