/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
      extend: {
        colors: {
          dark: "#0f0023",
          beige: "#f6f0e6",
          grenat: "#3b0420",
          green: "#112621",
          mauve: "#b080ff",
          blue: "#2596be",
          blueDark: "#1a0046",
          yellow: "#EFB659",
          brown: "#63451B",
          grey: "#e6eff0",
          pink: '#FE0060',
          grey: "rgb(219, 219, 225)",
          mauveIcon: "#8004fc",
          blueIcon: "#00bffe",
          beigeIcon: "#fffcf4",
          mauveBg: "rgba(106, 83, 255, 0.15)",
          mauveGradient: "#c480f9",
          blueGradient: "#7047f4"
        },
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
          adelle: ['"Adelle Sans Semibold"', 'sans-serif'],
          hisense: ['"Hisense Sans Bold"', 'sans-serif'],
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
  };