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
        primaryColor: "#007aff",
        secondaryColor: "#FF9A00"
      },
    },
  },
  plugins: [],
};
