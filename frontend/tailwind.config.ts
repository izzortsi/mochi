import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0f0f1a",
        paper: "#f5f0e8",
        bronze: "#cd7f32",
        silver: "#c0c0c0",
        gold: "#ffd700",
        phase1: "#6366f1",
        phase2: "#8b5cf6",
        phase3: "#ec4899",
        phase4: "#f59e0b",
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
