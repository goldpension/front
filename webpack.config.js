const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js"
  },
  // plugins: [new MyPlugin(), new MyOtherPlugin()],
});