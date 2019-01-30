const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/loading-bear.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'loading-bear.min.js',
    library: 'loadingBear',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
          }],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true,
        }
      },
    ],
  },
};