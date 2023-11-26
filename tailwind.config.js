/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      // Mobile Font Size
      'mob-biggest': '2.75rem',
      'mob-big': '1.75rem',
      'mob-h1': '1.5rem',
      'mob-h2': '1.25rem',
      'mob-h3': '1rem',
      'mob-h4': '0.938rem',
      'mob-small': '0.813rem',
      'mob-smaller': '0.75rem',
      // Desktop Font Size
      'desk-biggest': '4.5rem',
      'desk-big': '3rem',
      'desk-h1': '2.25rem',
      'desk-h2': '1.5rem',
      'desk-h3': '1.25rem',
      'desk-h4': '1rem',
      'desk-small': '0.875rem',
      'desk-smaller': '0.813rem',
    },
    colors: {
      'brown': '#2B1712',
      'light-brown': '#492D26',
      'grey': '#65463E',
      'sage': '#DDB66F',
      'title': '#2E2624',
      'text': '#5B4C48',
      'text-light': '#847571',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      cursive: ['Pacifico', 'cursive'],
    },
    extend: {},
  },
  plugins: [],
}