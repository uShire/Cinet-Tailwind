/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dilaw: "#f9c73d",
        asul: "#005e7f",
        light: "#ffffff",
        dark: "#2b2b2b",
      },
      backgroundImage: {
        bannerDesk: "url(./img/cinet-banner-desktop.svg)",
        bannerMob: "url(./img/cinet-banner-mobile.svg)",
      },
      fontFamily: {
        poppins: ["poppins"],
      },
    },
  },
  plugins: [],
};
