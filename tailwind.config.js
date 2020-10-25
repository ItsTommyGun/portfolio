module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
        '10xl': '8rem',
        '11xl': '9rem',
        '12xl': '10rem',
        '13xl': '11rem',
        '14xl': '12rem',
        '15xl': '13rem'
      },
      width: {
        '15': '15%',
        '25': '25%',
        '35': '35%',
        '45': '45%',
        '55': '55%',
        '65': '65%',
        '75': '75%',
        '85': '85%',
        '95': '95%',
        '30': '30%',
        '40': '40%',
        '60': '60%',
        '70': '70%',
        '80': '80%',
        '90': '90%',
      },

      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0px) translateX(0px)'
          }
        }
      }
    },
    
    container: {
      maxWidth: {
        xl: '1440px'
      },
    }
  },
  variants: {},
  plugins: [],
}
