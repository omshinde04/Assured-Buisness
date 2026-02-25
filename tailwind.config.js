/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ===== BRAND COLORS (Stitch UI Inspired) ===== */
        primary: "#0A1E3A",          // Deep corporate navy
        "navy-corporate": "#0A1E3A",
        "royal-blue": "#102A54",     // Slight lighter navy
        accent: "#3B82F6",           // Blue highlight (hero accent text)

        /* ===== BACKGROUND SYSTEM ===== */
        "background-light": "#FFFFFF",
        "background-pearl": "#F8FAFC",
        "background-grey": "#F1F5F9",
        "background-muted": "#E2E8F0",

        /* ===== TEXT ===== */
        "text-dark": "#0F172A",
        "text-muted": "#64748B",

        /* ===== BORDER ===== */
        "border-soft": "#E2E8F0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        premium: "0 25px 60px -15px rgba(10, 30, 58, 0.15)",
        soft: "0 10px 30px rgba(2,6,23,0.05)",
        glow: "0 0 25px rgba(59,130,246,0.15)",
      },

      borderRadius: {
        xl: "0.75rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      }
    },
  },
  plugins: [],
};