module.exports = {
  corePlugins: {
    animation: true,
  },
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"]
      },
      colors: {
        'custom-gray': '#dbdbdb',
        'custom-black': '#0b0e11',
        'inu-gray': '#151a21',
        'main-blue': '#8739F9',
        'main-light': '#C651CD',
        'main-dark': '#363636',
        'primary-dark': '#100F10',
        'primary-dark2': '#1B1B1B',
        'primary-dark3': '#242424',
        'tag-light': '#fafafc',
        'tag-dark': '#18181c'
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus', 'group-hover'],
      borderWidth: ['hover', 'focus'],
      margin: ['first', 'last'],
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
