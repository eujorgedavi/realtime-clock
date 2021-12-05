module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        inputText: ["Monoton"],
      },
      colors: {
        border: "#5077f5",
        firstGr: "#3b38ee",
        secondGr: "#5077f5",
        timerBg: "#131514",
      },
      borderWidth: {
        outer: "15px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};