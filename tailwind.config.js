/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lgSpartan: ["League Spartan", "system-ui"],
      },
      colors: {
        secondary: "#FF602C",
        tertiary: "#A9EDC8",
        card: "#1A1A1A",
        grayText: "#9C9C9C",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
