// Base webpack config
const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    'index.android': './index.android.js',
    'index.ios': './index.ios.js'
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.json$/,
        loaders: ['json']
      },
      {
        test: /\.node$/,
        loaders: ['node']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['react-native-css-loader']
      },
      {
        test: /\.(ttf|eot|svg)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loaders: [ 'file?hash=sha512&digest=hex&name=./fonts/[hash].[ext]' ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=50000&mimetype=application/font-woff&name=./fonts/[hash].[ext]'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },

  plugins: [
    new webpack.optimize.DedupePlugin()
  ]
};
