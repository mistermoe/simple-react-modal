var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./example/index.js",
  output: {
    path: "example/public",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: "babel"
      },
      { 
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader") 
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css")
  ],
};