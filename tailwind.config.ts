import type { Config } from "tailwindcss";
const config: Config = { darkMode: ["class"], content: ["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"], theme: { extend: { colors: { bg: "#08090b", panel: "#101216", line: "#242832", ink: "#f5f7fa", muted: "#8b93a1", accent: "#7c5cff" }, boxShadow: { glow: "0 0 50px rgba(124,92,255,.18)" } } }, plugins: [] };
export default config;
