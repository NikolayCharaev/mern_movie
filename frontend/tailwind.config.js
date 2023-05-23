/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        appBg: '#161515',
        textColor: '#ffffff',
        headerBg: '#404b62',
        buttonBg : "#ed5761"
      },
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
        jost: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
