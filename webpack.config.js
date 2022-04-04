const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./client/index.html",
  filename: "./index.html",
});
module.exports = {
  entry: path.join(__dirname, "client/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "build.js",
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [htmlPlugin],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
      publicPath: "/dist",
    },
    proxy: { "/api": "http://localhost:3000" },
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"],
  },
};
