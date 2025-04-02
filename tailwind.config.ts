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
  },
  plugins: [],
};
export default config;
