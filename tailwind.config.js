/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "navbar-primary": "#0B1221",
        "navbar-text": "#fff",
        "navbar-link-hover": "#ffc107",
        primary: "#0B1221",
        secondary: "#0B1221",
      },
      screens: {
        xsm: "500px",
        msm: "400px",
        xs: "300px",
      },
    },
  },
  plugins: [],
};
