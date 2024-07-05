/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        Average: ["Average Sans"],
        rethink: ["Rethink Sans"],
        inclusive: ["Inclusive Sand"],
      },
      colors: {
        blue: "#10121c",
        sec: "#c084fc",
        box: "#171824",
      },
    },
  },
  plugins: [],
};
