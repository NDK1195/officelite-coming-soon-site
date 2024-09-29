/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        box: "0px 50px 50px -25px rgba(75, 92, 154, 0.25)",
        button: "0px 25px 25px -10px rgba(63, 91, 194, 0.25)",
      },
      colors: {
        "#5175FF": "#5175FF",
        "#333950": "#333950",
        "#747B95": "#747B95",
        "#829CFF": "#829CFF",
        "#25293A": "#25293A",
        "#F05B5B": "#F05B5B",
      },
    },
  },
  plugins: [],
};
