/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "navbar-shadow": "0px 4px 16px 0px rgba(0, 0, 0, 0.25)",
        "contact-shadow": "-10px 10px 36.5px 1px #000000",
      },
      backgroundImage: {
        "building-image": "url('/building.png')",
        "about-gradient":
          "linear-gradient(269.82deg, #706C6C 0.14%, #171616 99.82%)",
        "project-gradient":
          "linear-gradient(269.82deg, #706C6C 0.14%, #171616 99.82%)",
      },
      screens: {
        xs: "344px",
        sm: "376px",
        md: "412px",
        lg: "540px",
        xl: "648px",
        xxl: "768px",
        "2xxl": "1024px",
        "3xl": "1240px"
      },
    },
  },
  plugins: [],
};

// xs: 400
