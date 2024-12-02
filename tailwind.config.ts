import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(179deg, rgba(0,0,0,1) 0%, rgba(91,46,214,1) 48%, rgba(177,166,207,1) 100%, rgba(98,93,110,1) 100%)",

        "Signup Background": "../../assets/reset.png",
      },
    },
    animation: {
      scroll: "scroll 15s linear infinite",
    },
    fontFamily: {
      syne: ["Syne", ...fontFamily.sans],
      poppins: ["Poppins", ...fontFamily.sans],
      inter: ["Inter", ...fontFamily.sans],
    },
    keyframes: {
      scroll: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-100%)" },
      },
    },
  },
  plugins: [],
} satisfies Config;
