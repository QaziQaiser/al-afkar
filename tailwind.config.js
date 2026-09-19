/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          emerald: '#064e3b',
          darkEmerald: '#00382e',
          accent: '#22c55e',
          lightAccent: '#4ade80',
          slate: '#0b192c',
          darkSlate: '#07101e',
          gold: '#d4af37'
        }
      },
      fontFamily: {
        heading: ['Outfit', 'Inter', 'Cairo', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        arabic: ['Cairo', 'Tajawal', 'sans-serif']
      }
    },
  },
  plugins: [],
}
