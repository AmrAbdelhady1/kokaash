/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "280px",
        md: "768px",
      },
      boxShadow: {
        "md-right-bottom": "1px 1px 0px 0px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        MDLZ: ["Bebas Neue"],
        Gotham: ["GothamBlack"],
        GothamLight: ["GothamLight"],
      },
      colors: {
        customPink: "#F174A7",
        cyanButtons: "#53BDF2",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
