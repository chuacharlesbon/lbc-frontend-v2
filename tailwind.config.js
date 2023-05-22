module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato'],
        roboto: ['Roboto'],
        poppins: ['Poppins'],
      },
      height: () => ({
        '900px': '900px',
        '800px': '800px',
        '790px': '790px',
        '780px': '780px',
        '770px': '770px',
        '760px': '760px',
        '750px': '750px',
        '700px': '700px',
        '600px': '600px',
        '500px': '500px',
        '480px': '480px',
        '400px': '400px',
        '350px': '350px',
        '300px': '300px',
        '200px': '200px',
      }),
      width: () => ({
        '3000px': '3000px',
        '2400px': '2400px',
        '1000px': '1000px',
        '900px': '900px',
        '800px': '800px',
        '700px': '700px',
        '600px': '600px',
        '500px': '500px',
        '400px': '400px',
        '350px': '350px',
        '300px': '300px',
        '250px': '250px',
        '200px': '200px',
        '1/7': '14%',
        '1/8': '12.5%',
        '2/8': '25%',
        '3/8': '37.5%',
        '1/10': '10%',
        '9.25/12': '77%',
        '9.5/12': '79%',
        '1/13': '7.7%'
      }),
    },
    screens: {
      phone: '0px',
      mobile: '320px',
      medium: '540px',
      tablet: '768px',
      tabletWide: '1024px',
      laptopSm: '1280px',
      laptop: '1440px',
      desktop: '1600px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        100: '#073763',
        200: '#073763B3',
        300: '#07376366',
        400: '#073661',
        500: '#083E70',
        600: '#00407C',
        700: '#05294A',
      },
      secondary: {
        100: '#202123',
        200: '#202123B3',
        300: '#20212366',
      },
      blue: {
        100: '#3173AF',
        200: '#6F9AC5',
        300: '#A9C2DA',
        400: '#0C61B0',
      },
      white: '#FCFCFC',
      grey: {
        100: '#818181',
        200: '#818181B3',
        300: '#81818166',
        400: '#81818140',
        500: '#F5F6F7',
        600: '#F2F5FF',
        700: '#7D888B',
        800: '#EFF3F4',
        900: '#F7FAFB',
        1000: '#798689',
        1100: '#DADADA',
        1200: '#C9D5D9',
      },
      red: {
        100: '#E94128',
        200: '#F37777B3',
        300: '#F3777766',
        400: '#D31245',
      },
      green: {
        100: '#63C9A8',
        200: '#92D6BF',
        300: '#BDE4D7',
        400: '#42B963',
      },
      yellow: {
        100: '#F79520',
        200: '#FAE4AD',
        300: '#F7ECCD',
        400: '#FBDD8C'
      },
      orange: {
        100: '#FF733F',
        200: '#FF7643',
        300: '#F7D8AC',
        400: '#FF6C3E',
      },
      dark: {
        100: '#333333',
      },
      light: {
        100: '#F8FBFF',
        200: '#E8F3FD',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar-hide')],
};
