const path = require('path');


module.exports = {
	entry: path.resolve(__dirname, 'index.js'),
	output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
	},
  devServer: {
    port: 9000,
  },
  module: {
    rules: [
      // Rules for loaders
      {
        // test: What type i want to recognize
        // use: What loader will be load
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader'}
        ]
      }
    ]
  }
}