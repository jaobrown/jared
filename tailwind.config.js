module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        black: '#212121',
        white: '#FAFAFA',
        blue: '#6960FF',
        gray: {
          100: '#F2F2F2',
          200: '#E0E0E0',
          300: '#C2C2C2',
          400: '#949494',
          500: '#6E6E6E',
          600: '#474747',
          700: '#2E2E2E',
        },
      },
      spacing: {
        '9/16': '56.25%',
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      body: [
        'Poppins',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      sans: [
        'Poppins',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      serif: [
        'Caladea',
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
        'serif',
      ],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.88rem',
      base: '1rem',
      md: '1.13rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '1.88rem',
      '3xl': '2.25rem',
      '4xl': '3rem',
      '5xl': '3.75rem',
      '6xl': '4.5rem',
    },
    typography: (theme) => ({
      default: {
        css: {
          color: theme('colors.gray.700'),
          figure: {
            marginTop: '2.5em',
            marginBottom: '2.5em',
          },
          p: {
            fontFamily: theme('fontFamily.serif[0]'),
            fontSize: '1.125rem',
          },
          h2: {
            fontSize: '1rem',
            fontWeight: '600',
            letterSpacing: '1.25px',
            textTransform: 'uppercase',
          },
          ul: {
            maxWidth: '42rem',
          }
        },
      },
    }),
  },
  variants: {},
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/ui')],
}
