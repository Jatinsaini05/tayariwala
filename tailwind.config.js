import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-45deg": "linear-gradient(45deg, var(--tw-gradient-stops))",
      },
      colors: {
        custom241737: "#241737",
        customFFEB3B: "#FFEB3B",
        customFC6200: "#FC6200",
        customEAE1D6: "#EAE1D6",
      },
    },
    container: {
      center: true, // Set to true to center the container
      padding: "1rem", // You can adjust this as needed
      screens: {
        xs: "100%", // Full width for extra-small screens
        sm: "100%", // Full width for small screens
        md: "740px", // Custom width for medium screens
        lg: "840px", // Custom width for large screens
        xl: "1140px", // Custom width for extra-large screens
        "2xl": "1320px", // Custom width for 2x extra-large screens
      },
    },
  },
  screens: {
    xs: "100%", // Extra-small screens (e.g., small mobile devices)
    sm: "100%", // Small screens (e.g., mobile devices)
    md: "768px", // Medium screens (e.g., tablets)
    lg: "1024px", // Large screens (e.g., laptops)
    xl: "1280px", // Extra-large screens (e.g., desktops)
    custom: "463px",
  },

  darkMode: "class",
  plugins: [nextui()],
};
