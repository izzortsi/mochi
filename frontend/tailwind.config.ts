import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#000000",
        surface: "#0c0c0c",
        surfaceAlt: "#141414",
        inset: "#050505",
        border: "#1f1f1f",
        borderStrong: "#2a2a2a",
        borderHover: "#404040",
        paper: "#e5e5e5",
        bronze: "#a0642a",
        silver: "#b8b8b8",
        gold: "#e6c200",
        phase1: "#5558e3",
        phase2: "#7c4ed6",
        phase3: "#d93d85",
        phase4: "#db8b08",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Source Sans 3", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
