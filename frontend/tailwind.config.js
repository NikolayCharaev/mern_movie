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

      boxShadow: {
        cardShadow: '2px -100px 100px 76px rgba(22, 21, 21, 0.91) inset',
      },
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
        jost: ['Jost', 'sans-serif'],
      },
      screens: {
        mt: { max: '500px' },
        xs: { max: '580px' },
        sm: { max: '768px' },
        lg: { max: '992px' },
        md: { max: '1060px' },
        xl: { max: '1280px' },
        '2xl': '1400px',
      },
      backgroundImage: (theme) => ({
        'card-gradient':
          'linear-gradient(0deg, rgba(18,18,18,0.8), rgba(51,51,51,0.8), rgba(82,82,82,0.8))',
      }),
    },
  },
  plugins: [],
};
