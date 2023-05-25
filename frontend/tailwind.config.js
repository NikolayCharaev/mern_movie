/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        appBg: '#161515',
        textColor: '#ffffff',
        headerBg: '#212121',
        buttonBg: '#eb363e',
      },
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
        jost: ['Jost', 'sans-serif'],
      },
      backgroundImage: (theme) => ({
        'card-gradient':
          'linear-gradient(0deg, rgba(18,18,18,0.8), rgba(51,51,51,0.8), rgba(82,82,82,0.8))',
      }),
    },
  },
  plugins: [],
};
