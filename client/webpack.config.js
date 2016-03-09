const webpack = require('webpack')
const path = require("path")
const autoprefixer = require('autoprefixer')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/components/index/index.jsx'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: path.resolve(__dirname, 'src'),
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader!postcss-loader"
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=55000'
    }]
  },
  postcss: [autoprefixer({
    browsers: ['last 2 versions']
  })],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    // It suppress error shown in console, so it has to be set to false.
    quiet: false,
    // It suppress everything except error, so it has to be set to false as well
    // to see success build.
    noInfo: false,
    stats: {
      // Config for minimal console.log mess.
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
