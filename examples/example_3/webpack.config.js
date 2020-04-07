const path = require("path");

module.exports = {
  entry: "./component.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
