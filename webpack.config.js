const path = require("path");

module.exports = {
  mode: nodeEnv,
  entry: {
    dist: "./src/entries/main.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "h5p-page.js",
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        include: path.resolve(__dirname, "src"),
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, "src/styles"),
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        include: path.resolve(__dirname, "src"),
        loader: "url-loader?limit=100000",
      },
    ],
  },
  externals: {
    jquery: "H5P.jQuery",
  },
};
