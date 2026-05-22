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
        navy: "var(--navy)",
        gold: "var(--gold)",
        brown: "var(--brown)",
        cream: "var(--cream)",
        "text-light": "var(--text-light)",
        "text-dark": "var(--text-dark)",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        lora: ["var(--font-lora)", "serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
