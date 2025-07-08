/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: "#C48BEF",
        customGray: "#ACAFB9",
        customWhite: "rgba(255, 255, 255, 0.90)",
        customDimWhite:"rgba(255, 255, 255, 0.70)",
        containerLine:"rgba(255, 255, 255, 0.10)",
        customBlack: "#141414",
      },
      fontFamily: {
        saans: ['Saans TRIAL', 'sans-serif'],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}


