const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
MiniCssExtractPlugin.extract = function (param) {

}

const webpack = require('webpack')


module.exports = {
	entry: {
    // vendor: [
    //   'react',
    //   'react-dom'
    // ],
    home: path.resolve(__dirname, 'src/js/index.js'),
    contact: path.resolve(__dirname, 'src/js/contact.js'),
  },
	output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
	},
  module: {
    rules: [
      // Rules for loaders
      {
        // test: What type i want to recognize
        // use: What loader will be load
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
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
          'css-loader'
        ]
      },
      // Rules for loaders
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.styl$/,
        use: [MiniCssExtractPlugin.loader,
          'css-loader',
          'stylus-loader'
          // {
          //   loader: 'stylus-loader',
          //   options: {
          //     use: [
          //       require('nib'),
          //       require('rupture')
          //     ],
          //     import: [
          //       '~nib/lib/nib/index.styl',
          //       '~rupture/rupture/nib/index.styl'
          //     ]
          //   }
          // }
        ]
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "src/css/[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json')
    })
  ],

  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor:{
  //           chunks: 'initial',
  //           name: 'vendor',
  //           test: 'vendor',
  //           enforce: true
  //       }
  //     }
  //   }
  // },

}