/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          950: '#060B18',
          900: '#0B132B',
          800: '#1C2541',
          700: '#2C3E6B',
          600: '#3A506B',
          100: '#EEF2F6',
          50: '#F8FAFC',
        },
        gold: {
          50: '#FCF9EE',
          100: '#F7F0D4',
          200: '#EEDDA4',
          300: '#E4C76F',
          400: '#DBB542',
          500: '#C99E25', // Primary Gold
          600: '#B0851A',
          700: '#8C6614',
          800: '#6E4E14',
          900: '#563D13',
        },
        champagne: '#F4E8C1',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Cinzel', 'Georgia', 'serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(201, 158, 37, 0.3)',
        'luxury': '0 20px 40px -15px rgba(11, 19, 43, 0.12)',
      }
    },
  },
  plugins: [],
}
