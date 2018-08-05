const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
MiniCssExtractPlugin.extract = function (param) {

}


module.exports = {
	entry: path.resolve(__dirname, 'src/js/index.js'),
	output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: './dist/'

	},
  module: {
    rules: [
      // Rules for loaders
      {
        // test: What type i want to recognize
        // use: What loader will be load
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      // {
      //   test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       // name: '[path][name].[ext]?[hash]',
      //       name: (file) => {
      //         const path = file
      //         const pathParts = path.split('/')
      //         if (process.env.NODE_ENV !== 'production') {
      //           return `${pathParts[pathParts.length - 3]}/${pathParts[pathParts.length - 2]}/[name].[ext]`
      //         }

      //         return `${pathParts[pathParts.length - 3]}/${pathParts[pathParts.length - 2]}/[name].[ext]?[hash]`
      //       },
      //       outputPath: '',
      //       context: 'dist/'

      //     }
      //   }
      // },
      {
        // test: What type i want to recognize
        // use: What loader will be load
        test: /\.(ogg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 200000,
            name: 'src/videos/[name].[hash].[ext]'
          }
        }
      },
      {
        // test: What type i want to recognize
        // use: What loader will be load
        test: /\.(jpg|png|woff|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 200000
          }
        }
      },
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
      filename: "src/css/[name].css",
      chunkFilename: "[id].css"
    })
  ]
}