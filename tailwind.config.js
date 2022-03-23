module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: '#000000',
      },
      fontFamily: {
        'lemonmilk': ['LemonMilk', 'ui-sans-serif', 'sans-serif'],
        'arialblack': ['ArialBlack', 'ui-sans-serif', 'sans-serif'],
        'sans': ['Montserrat'],
      },
    }
  },
  plugins: [],
}
