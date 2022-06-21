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
        "539.22px": "539.22px",
        "447.43px":"447.43px",
        "286.83px":"286.83px",
        "238px":"238px",
        "119px": "119px",
        "118.75px": "118.75px",
        "381px": "381px",
        "328px": "328px"
      },
      fontSize: {
        'toolbar': ['24px', {
          letterSpacing: '-0.08em',
          lineHeight: '25px',
        }],
        'footer': ['14px', {
          lineHeight: '17px',
        }],
        'title': ['60px', {
          letterSpacing: '-0.035em',
          lineHeight: '95px',
        }],
        'description': ['24px', {
          letterSpacing: '-0.035em',
          lineHeight: '36px',
        }],
        'button': ['14px', {
          letterSpacing: '-0.035em',
          lineHeight: '21px',
        }],
      },
    },
  },
  plugins: [],
}
