module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a8b4ea",

          secondary: "#40acbc",

          accent: "#07c4c1",

          neutral: "#362A3C",

          "base-100": "#18191A",

          info: "#82A9F7",

          success: "#24DBA7",

          warning: "#F4CD71",

          error: "#EE7286",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
