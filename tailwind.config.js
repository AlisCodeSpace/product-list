/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-1160": { max: "1160px" }, // Custom max-width breakpoint
      },
    },
  },
  plugins: [],
};
