/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        display: "Yellowtail",
        accent: "Questrial",
      },
      gridTemplateColumns: {
        "auto-fill-100": "repeat(auto-fill, minmax(100px, 1fr))",
        "auto-fit-100": "repeat(auto-fit, minmax(100px, 1fr))",
        "auto-fit-200": "repeat(auto-fit, minmax(200px, 1fr))",
        "auto-fill-200": "repeat(auto-fill, minmax(200px, 1fr))",
        "auto-fit-150": "repeat(auto-fit, minmax(150px, 1fr))",
      },
      backgroundImage: {
        "mail-stamp": "url('./assets/mail_stamp.svg')",
      },
    },
  },
  plugins: [],
};
