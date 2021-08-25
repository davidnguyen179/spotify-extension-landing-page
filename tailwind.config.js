const colors = {
  'spotify-dark-blue': '#1f2937',
  'spotify-green': '#19e68d',
  'spotify-dark-green': '#14b870',
  'spotify-deep-blue': '#1c2963',
  'spotify-light-deep-blue': '#495382',
  'spotify-imperial': '#5C1D6B',
  'spotify-web-gold': '#FDD602',
  'spotify-dark-web-gold': '#e3c001',
  'spotify-yellow-orange': '#FFA64C',
  'spotify-electric-pink': '#FF3179',
  'spotify-byzantine': '#B41EB2',
  'spotify-brilliant-azure': '#38A6F3',
  'spotify-champagne': '#F6E2CB',
}

module.exports = {
  purge: [],
  darkMode: 'media',
  theme: {
    extend: {},
    textColor: (theme) => ({
      ...theme('colors'),
      ...colors,
    }),
    backgroundColor: (theme) => ({
      ...theme('colors'),
      ...colors,
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
