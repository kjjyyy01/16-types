/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        header: "#DDBC89",
        text: "#AA512F",
        background: "#EDE7CF",
        card: "#F9F3CF",
        button: "#AA512F",
        buttontext: "#EDE7CF",
      },
    },
  },
  plugins: [],
};
