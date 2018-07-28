const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
MiniCssExtractPlugin.extract = function (param) {

}

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
    pricing: path.resolve(__dirname, 'src/js/pricing.js'),
    contact: path.resolve(__dirname, 'src/js/contact.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      // Rules for loaders
      {
        // test: What type i want to recognize
        // use: What loader will be load
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css"
    })
  ]
}