/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnightblue: "#021058",
        white: "#fff",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "inknut-antiqua": "'Inknut Antiqua'",
        inika: "Inika",
        "goblin-one": "'Goblin One'",
        inter: "Inter",
        graduate: "Graduate",
        "gravitas-one": "'Gravitas One'",
        diplomata: "Diplomata",
        inconsolata: "Inconsolata",
        inherit: "inherit",
      },
      borderRadius: {
        "11xl": "30px",
        "3xs": "10px",
        "31xl": "50px",
        xl: "20px",
      },
    },
    fontSize: {
      xl: "20px",
      xs: "12px",
      mini: "15px",
      "2xs": "11px",
      smi: "13px",
      base: "16px",
      "6xl": "25px",
      lg: "18px",
      sm: "14px",
      mid: "17px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
