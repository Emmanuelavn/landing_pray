/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FBF8F3",
          100: "#F5EFE3",
          200: "#EDE3CE",
        },
        night: {
          900: "#0E1733",
          800: "#172041",
          700: "#1F2A52",
        },
        gold: {
          400: "#E8B86B",
          500: "#D4A24A",
          600: "#B68536",
        },
        terra: {
          500: "#B14E2B",
          600: "#9A3F22",
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        body: ['"Manrope"', "sans-serif"],
        script: ['"Dancing Script"', "cursive"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "pulse-soft": "pulseSoft 2.5s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "twinkle": "twinkle 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(212, 162, 74, 0.5)" },
          "50%": { transform: "scale(1.02)", boxShadow: "0 0 0 12px rgba(212, 162, 74, 0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gradient-night": "linear-gradient(180deg, #0E1733 0%, #172041 100%)",
        "gradient-gold": "linear-gradient(135deg, #E8B86B 0%, #B68536 100%)",
        "gradient-cream": "linear-gradient(180deg, #FBF8F3 0%, #F5EFE3 100%)",
      },
    },
  },
  plugins: [],
};
