import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Ovo",
      styles: ["400"],
    },
    {
      name: "Muli",
      styles: ["400", "400i", "700", "700i"]
    }
  ],
  headerFontFamily: [
    "Ovo",
    "serif"
  ],
  bodyFontFamily: ["Muli", "sans-serif"],
  bodyColor: "hsla(0,0%,0%,0.9)",
  headerWeight: 400,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    a: {
      boxShadow: "0 1px 0 0 currentColor",
      color: "#CC7F0F",
      textDecoration: "none",
    },
    "a:hover": {
      boxShadow: "0 1px 0 0 currentColor",
      color: "#1EAEDB",
      textDecoration: "none",
    }
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
