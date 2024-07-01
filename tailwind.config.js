/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Iransans: "IRANSans",
      },
      colors: {
        metricGreen: "rgba(var(--metricGreen))",
        metricPurple: "rgba(var(--metricPurple))",
        metricAqua: "rgba(var(--metricAqua))",
        metricPink: "rgba(var(--metricPink))",
        metricYellow1: "rgba(var(--metricYellow))",
        metricOrange: "rgba(var(--metricOrange))",
        metricWhite: "rgba(var(--metricWhite))",
        metricWhite2: "rgba(var(--metricWhite2))",
        metricGray: "rgba(var(--metricGray))",
        metricBlack: "rgba(var(--metricBlack))",
        metricGray2: "rgba(var(--metricGray2))",
        metricGray3: "rgba(var(--metricGray3))",
        metricGray4: "rgba(var(--metricGray4))",
      },
      transitionProperty: {
        width: "width",
        height: "height",
        spacing: "margin, padding",
        position: "bottom, top, left, right",
        widthnPos: "bottom, top, left, right, height,width",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
});
