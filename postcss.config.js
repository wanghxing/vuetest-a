module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ["Android >= 4.0", "iOS >= 7"]
    },
    "postcss-px-to-viewport": {
      unitToConvert: "px",
      viewportWidth: 375,
      viewportHeight: 677, // not now used; TODO: need for different units and math for different properties
      unitPrecision: 5,
      viewportUnit: "vw",
      fontViewportUnit: "vw", // vmin is more suitable.
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false
    }
  }
};
