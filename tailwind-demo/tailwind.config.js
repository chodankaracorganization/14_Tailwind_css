/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      myblue: "#1FB6FF",
      pink: "#FF49FB",
    },
    fontFamily:{},
    extend: {},
  },
  plugins: [require("daisyui")],
};
