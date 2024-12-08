/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [],
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/Fondos/huacachina-9.jpg')",
        "banner-info":
          "url('/images/Fondos/estructura-abstracta-3d-gris-oscuro-3593.webp')",
      },
    },
  },
};
