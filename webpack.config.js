var path = require('path');

module.exports = {
  context : path.join(__dirname, './'),
  entry: './app/app.jsx',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx','.styl']
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loaders: ['style-loader','css-loader','stylus-loader'],
        include: path.join(__dirname, 'app/css')
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        },
        include: path.join(__dirname, 'app')
      }
    ]
  }
};
