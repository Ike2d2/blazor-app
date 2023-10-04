/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.razor", "./Pages/*.{cshtml,razor}", "./Shared/*.razor"],
  theme: {
    fontSize: {
      xs: ".725rem",
      sm: "0.825rem",
      nav: ".925rem",
      "nav-icon": "1.125",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      colors: {
        primary: "hsl(212, 72%, 59%)",
        secondary: "hsl(230, 8%, 46%)",
        success: "hsl(152, 90%, 44%)",
        info: "hsl(195, 96%, 67%)",
        warning: "hsl(43, 92%, 50%)",
        danger: "hsl(0, 84%, 50%)",
        gray: {
          150: "rgb(233,235,238)",
          750: "rgb(36,46,62)",
        },
      },
      height: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};
