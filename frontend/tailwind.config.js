/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        'mainFont':'#09090B',
        'middleFont':'#666666',
        'endFont':'#999999'
      }
    },
  },
  plugins: [],
}

