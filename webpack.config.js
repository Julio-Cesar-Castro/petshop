const CopyWebpackPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
  mode: "development",
  target: "web",
  entry: path.resolve(__dirname, "src", "main.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist")
    },
    port: 3000,
    liveReload: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      favicon: path.resolve("src", "assets", "pet-paw.svg")
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, "src", "assets"),
        to: path.resolve(__dirname, "dist", "src", "assets")
      }]
    })

  ],
  module: {
    rules: [
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"]
    },
    {
      test: /\.js$/,
      exclude: /node_module/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    }
  
  ]
  }
}