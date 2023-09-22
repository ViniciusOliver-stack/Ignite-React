import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray_color: {
          900: "#121214",
          800: "#202024",
          700: "#323238",
          600: "#7c7c8a",
          500: "#8d8d99",
          400: "#e1e1e6",
        },
        red_color: {
          900: "#f75a68",
        },
        green_color: {
          900: "#00875F",
          500: "#00b37e",
        },
      },
    },
  },
  plugins: [],
};
export default config;
