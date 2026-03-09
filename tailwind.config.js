/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0A0F1E",
        card: "#0F172A",
        "teal-primary": "#0D9488",
        accent: "#6366F1",
      },
      keyframes: {
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "particle-rise": {
          "0%": { transform: "translateY(100vh) scale(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "0.6" },
          "100%": { transform: "translateY(-20vh) scale(1.2)", opacity: "0" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "stagger-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(60px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(40px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-40px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        "wave": {
          "0%, 100%": { transform: "scaleY(0.4)" },
          "50%": { transform: "scaleY(1.0)" },
        },
        "orbit": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "ripple": {
          "0%": { transform: "scale(0)", opacity: "0.6" },
          "100%": { transform: "scale(4)", opacity: "0" },
        },
        "count-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "underline-grow": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        "shield-pulse": {
          "0%, 100%": { transform: "scale(1)", filter: "drop-shadow(0 0 0px #0D9488)" },
          "50%": { transform: "scale(1.08)", filter: "drop-shadow(0 0 8px #0D9488)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "ring-fill": {
          "0%": { strokeDashoffset: "283" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "float": "float 4s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "shimmer": "shimmer 2s linear infinite",
        "stagger-in": "stagger-in 0.6s ease forwards",
        "slide-up": "slide-up 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "slide-in-right": "slide-in-right 0.4s ease forwards",
        "slide-in-left": "slide-in-left 0.4s ease forwards",
        "fade-in": "fade-in 0.4s ease forwards",
        "pulse-ring": "pulse-ring 1.4s ease-out infinite",
        "wave": "wave 1.2s ease-in-out infinite",
        "orbit": "orbit 1s linear infinite",
        "ripple": "ripple 0.6s ease-out forwards",
        "count-up": "count-up 0.6s ease forwards",
        "shield-pulse": "shield-pulse 2.5s ease-in-out infinite",
        "spin-slow": "spin-slow 2s linear infinite",
        "ring-fill": "ring-fill 1.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};
