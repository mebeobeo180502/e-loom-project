/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        eloom: {
          surface: '#FAFAFA', 
          olive: '#3A473D',   
          camellia: '#B02A30', // Updated from old mockup
          dark: '#151B17',    
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Nanum Myeongjo"', 'serif'],
        sans: ['"Syncopate"', '"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        futuristic: '0.25em',
      },
      borderWidth: {
        'hairline': '0.5px', 
      }
    },
  },
  plugins: [],
}
