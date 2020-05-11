module.exports = {
  theme: {
    filter: {
      'none': 'grayscale(0)',
      'grayscale': 'grayscale(1)'
    },
    extend: {
      screens: {
      '2xl': '1500px'
      },
      borderWidth: {
        '10': '10px'
      },
      borderRadius: {
        'xl': '.8rem'
      },
      fontFamily: {
        sans: [
          'Roboto',
        ],
        display: [
          'Roboto Slab'
        ],
      },
      maxWidth: {
        '100': '100px'
      },
      colors: {
        green: {
          light: '#4abf48',
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
        'blue-blue-dark': ['#4E899E', '#074156'],
      },
    }
  },
  variants: {
    filter: ['responsive', 'hover'],
    backdropFilter: ['responsive', 'hover'], 
    linearGradients: ['responsive', 'even']
  },
  corePlugins: {
    container: false
  },
  plugins: [
    require('tailwindcss-gradients'),
    require('tailwindcss-filters'),
  ],
}