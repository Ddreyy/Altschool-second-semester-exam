/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      'sora' : 'Sora',
      'lato' : ['Lato', 'Arial'],
      'satoshi' : 'Satoshi',
    },
    extend: {},
  },
  plugins: [],
}

