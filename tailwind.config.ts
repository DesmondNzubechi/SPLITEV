import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "tickGreen": "#92d839",
        "primaryGreen": "#ABE138",
        "greenStart": "#BDE6A4",
        "greenEnd": '#DEFEBA',
        "blackText": "#0C1101",
        "navBg": "rgba(255, 255, 255, 0.60)",
        "anotherBg": "rgba(255, 255, 255, 0.75)",
        'whiteBg' : "rgba(255, 255, 255, 0.92)",
        "textPrimary" : "#7F847D"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
