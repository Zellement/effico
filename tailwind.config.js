module.exports = {
  theme: {
    extend: {
      screens: {
      '2xl': '1500px'
      },
      borderWidth: {
        '10': '10px'
      },
      fontFamily: {
        sans: [
          'Roboto',
        ],
        display: [
          'Roboto Slab'
        ],
      },
      colors: {
        green: {
          default: '#387B37',
          dark: '#1B301B',
        },
        blue: {
          default: '#4E899E',
          dark: '#074156',
        },
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20'
      },
      linearGradientColors: {
        'green-green-dark': ['#387B37', '#1B301B'],
      },
    }
  },
  corePlugins: {
    container: false
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
}