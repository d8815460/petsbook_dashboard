var webpack = require('webpack')
var path = require('path')
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')


var BUILD_DIR = path.resolve(__dirname, 'public/dist')
var APP_DIR = path.resolve(__dirname, 'src')

var config = {
  context: __dirname,                                   // input path
  entry: APP_DIR + '/index.js',
  devtool: 'source-map',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.jsx', '.scss', '.js', '.json'],  // along the way, subsequent file(s) to be consumed by webpack
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ]
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        include: APP_DIR,
        exclude: /(node_modules)/,
        loader: 'babel'
      },
      {
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap')
      }
    ]
  },
  postcss: [autoprefixer],
  plugins: [
    new ExtractTextPlugin('example.css', { allChunks: true }),
  ]
}

module.exports = config
