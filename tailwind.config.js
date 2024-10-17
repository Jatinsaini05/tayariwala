import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        custom5BC0DE: '#5BC0DE',
        custom1DB24E: '#1DB24E',
        custom337AB7: '#337AB7',
        custom286090: '#286090',
        custom025D2F: '#025D2F',
        custom007339: '#007339',
        customD8FAD4: '#D8FAD4',
        customEBF5F3: '#EBF5F3',
        customE6E6E6: '#E6E6E6',
        customD7F9D3: '#D7F9D3',
        custom33A037: '#33A037',
        custom5CB85C: '#5CB85C',
      }
    },
    container: {
      center: true, // Set to true to center the container
      padding: '1rem', // You can adjust this as needed
      screens: {
        'xs': '100%', // Full width for extra-small screens
        'sm': '100%', // Full width for small screens
        'md': '740px', // Custom width for medium screens
        'lg': '840px', // Custom width for large screens
        'xl': '1140px', // Custom width for extra-large screens
        '2xl': '1320px', // Custom width for 2x extra-large screens
      },
    },
  },
  screens: {
    'xs': '100%',  // Extra-small screens (e.g., small mobile devices)
    'sm': '100%',  // Small screens (e.g., mobile devices)
    'md': '768px',  // Medium screens (e.g., tablets)
    'lg': '1024px', // Large screens (e.g., laptops)
    'xl': '1280px', // Extra-large screens (e.g., desktops)
  },


  darkMode: "class",
  plugins: [nextui()],
}
