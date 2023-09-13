/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: ['Lobster', 'cursive'],
        poppins: ['Poppins', 'sans'],
      },
      colors: {
        customCarton: '#a66e36',
        customLightCarton: '#f1cca8', 
      },
    },
  },
  plugins: [],
};
