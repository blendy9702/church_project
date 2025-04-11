import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    // "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode: "class",
  theme: {
    screens: {
      xs: "480px",
      "max-xs": { max: "480px" },
    },
    extend: {
      colors: {
        ring: "#1e1e1e",
      },
    },
  },
  plugins: [],
};
export default config;
