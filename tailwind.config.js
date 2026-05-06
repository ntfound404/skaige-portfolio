/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#4B7BFF',
        ink: '#080B12',
      },
      boxShadow: {
        glow: '0 0 40px rgba(75, 123, 255, 0.22)',
        lift: '0 24px 80px rgba(0, 0, 0, 0.34)',
      },
    },
  },
  plugins: [],
}
