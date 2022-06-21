/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': { 'max': '375px' },
      },
      // padding: {
      //   'body': '40px 119px 24px 77px',
      // },
      fontFamily: {
        'inconsolata': ['Inconsolata', 'monospace'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'spaceMono': ['Space Mono', 'monospace'],
      },
      colors: {
        "primary": "#FFFFFF",
        "grayOne": "#333333",
        "grayTwo": "#4F4F4F",
        "grayThree": "#BDBDBD",
      },
      spacing: {
        "77px": "77px",
        "40%": "40%",
      },
      fontSize: {
        '2xlCustom': ['24px', {
          letterSpacing: '-0.08em',
          lineHeight: '25px',
        }],
        'smCustom': ['14px', {
          lineHeight: '17px',
        }]
      },
    },
  },
  plugins: [],
}
