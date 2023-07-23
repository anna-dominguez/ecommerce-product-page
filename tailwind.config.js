/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      orange: '#FF7E1B',
      white: '#FFFFFF',
      darkBlue: '#1D2026',
      blueGrey: '#69707D',
      grey: '#B6BCC8',
    },
    fontSize: {
      bodyS: ['15px', '25px'],
      bodyXS: '12px',
      headingS: '28px',
    },
    extend: {},
  },
  plugins: [],
}
