/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF7B00",
          dark: "#CC6300",
          light: "#FF9F40",
        },
        secondary: "#3B82F6",
      },
    },
  },
  plugins: [],
};
