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
        "whiteHalf": "rgba(255, 255, 255, 0.50)",
        'whiteBg': "rgba(255, 255, 255, 0.92)",
        'whiteTp' : "rgba(255, 255, 255, 0.10)",
        "textPrimary": "#7F847D",
        "primaryBg": "#F5F5F5",
        "blackTransparent": 'rgba(0, 0, 0, 0.50)',
        "lightBlue": 'rgba(74, 70, 251, 0.12)',
        'whiteFair' : "rgba(255, 255, 255, 0.00)"
       
      },
    },
  },
  plugins: [],
};
export default config;
