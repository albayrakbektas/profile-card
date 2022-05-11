module.exports = {
  content: ['./index.html', "./src/**/*.{html,js,css}"],
  mode: 'jit',
  theme: {
    screens: {
      md: "1440px",
    },
    extend: {
      fontSize: {
        default: "18px",
        "7xl": ['32px', {
          lineHeight: '44px',
        }],
        "9xl": ['44px', {
          lineHeight: '64px',
        }]
      },
      fontWeight: {
        400: "400",
        700: "700"
      },
      height: {
        140: "140px"
      },
      width: {
        350: "350px",
        500: "500px"
      },
      colors: {
        veryDarkDesaturatedBlue: "hsl(229, 23%, 23%)",
        darkGrayishBlue: "hsl(227, 10%, 46%)",
        darkGray: "hsl(0, 0%, 59%)",
      },
      backgroundColor: {
        darkCyan: "hsl(185, 75%, 39%)",
      },
    }
  },
  plugins: [],
}
