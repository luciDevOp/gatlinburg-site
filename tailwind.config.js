/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fira Sans', 'serif'],
        serif: ['Fira Sans', 'serif'],
      },
      colors: {
        green: {
          50: '#f0f9f5',
          100: '#d8eee3',
          200: '#b3dcc7',
          300: '#8ac4a8',
          400: '#5fa986',
          500: '#3f8b6a',
          600: '#2e7054',
          700: '#265b45',
          800: '#1F4E3D',
          900: '#1a3c2f',
        },
      },
    },
  },
  plugins: [],
};