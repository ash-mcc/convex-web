const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  corePlugins: {
    preflight: true
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: [
    './src/**/*.clj',
    './src/**/*.cljs'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          ...defaultTheme.fontFamily.sans,
        ],

        mono: [
          'Space Mono',
          ...defaultTheme.fontFamily.mono,
        ]
      }
    },
    typography: {
      default: {
        css: {
          pre: {
            color: false,
            backgroundColor: false
          }
        },
      },
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/ui')
  ]
}
