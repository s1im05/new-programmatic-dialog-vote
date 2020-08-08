const webpack = require('webpack'),
  path = require('path');

module.exports = {
  entry: {
    "np-vote": ['./src/np-vote.ts']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist/')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {}
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
          'sass-loader?sourceMap'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'url-loader?limit=10000',
          'img-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  },
  plugins: process.env.NODE_ENV === 'production' ? [new webpack.optimize.UglifyJsPlugin()] : []
};
