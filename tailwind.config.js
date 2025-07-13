/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-500": "#1B2021",
        "primary-300": "#A6A867",
        "white-200": "#F1F2E8",
    

        "primary-500": "#51513d", // title color
        "primary-3": "#3E7B45", // darkest
        "primary-2": "#6D9D76",
        "primary-1": "#89B78D",
        "primary-0": "#9CBFA7", // lightest

        "neon-900": "#B3D9A0", // neon
        "gray-200": "#C1D8C8", // gray

        "secondary-600": "#D6DBD2", 
        "secondary-500": "#9B9C8D",



        
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};