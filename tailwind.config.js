export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'light': '#FAFAFA',
      'dark': '#0D0E10',
      'blue': '#418DED',
      'blue-1': '#1650E5',
      'sun': '#FFD300',
      'sun-1': '#FFA109',
    },
    extend: {
      backgroundSize: {
        'size-150': '150% 150%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      fontFamily: {
        'sf-pro': ['SF Pro Display', 'sans-serif']
      }
    },
  },
  plugins: [
    
  ],
}