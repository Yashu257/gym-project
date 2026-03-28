/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff0000',
        'primary-dark': '#cc0000',
        dark: '#0a0a0a',
        'dark-light': '#1a1a1a',
        'dark-lighter': '#2a2a2a',
      },
    },
  },
  plugins: [],
}
