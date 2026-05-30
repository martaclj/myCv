/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        /* variables globales de style.css */
        'primary': 'var(--hospital-green)',
        'secondary': 'var(--very-light-pink)',
        'bg-base': 'var(--text-input-field)'
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
