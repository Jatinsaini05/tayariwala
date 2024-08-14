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
    extend: {},
  },
  screens: {
    'xs': '480px',  // Extra-small screens (e.g., small mobile devices)
    'sm': '640px',  // Small screens (e.g., mobile devices)
    'md': '768px',  // Medium screens (e.g., tablets)
    'lg': '1024px', // Large screens (e.g., laptops)
    'xl': '1280px', // Extra-large screens (e.g., desktops)
  },


  darkMode: "class",
  plugins: [nextui()],
}
