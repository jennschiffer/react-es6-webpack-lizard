module.exports = {
  entry: __dirname + '/app/app.jsx',
  output: {
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
        include: __dirname + '/app/css'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        },
        include: __dirname + '/app'
      }
    ]
  }
};
