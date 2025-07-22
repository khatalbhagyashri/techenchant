const { colors } = require("@mui/material");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slide-left": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "slide-left": "slide-left 0.3s ease-out forwards",
      },
      colors: {
        bodyColor: "#e8f1fa",
        primaryColor: "#007aff",
        secondaryColor: "#FF9A00",
        textColor: "#0d3c6b",
      },
      fontFamily: {
        super: ["SuperTrivia", "sans-serif"],
      },
    },
  },
  plugins: [],
};
