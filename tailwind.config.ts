import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ring: "#1e1e1e",
      },
    },
    screens: {
      "max-lg1220px": { max: "1220px" },
    },
  },
  plugins: [],
};
export default config;
