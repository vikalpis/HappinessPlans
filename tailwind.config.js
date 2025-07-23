/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        keyframes: {
          slideUp: {
            '0%': { transform: 'translateY(50%)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
        },
        animation: {
          slideUp: 'slideUp 0.8s ease-out forwards',
        },
      },
    },
    plugins: [],
  }
  