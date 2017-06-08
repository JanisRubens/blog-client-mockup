var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.join(__dirname,'..','src'),
  devtool: 'source-map',
  entry: {
    index: [
      'webpack-dev-server/client?http://localhost:3000/',
      'webpack/hot/only-dev-server',
      './js/index.js',
      './sass/app.scss'
    ],
    vendors: ['react','react-dom', 'redux','react-redux','react-router-redux','axios','redux-thunk']
  },
  output: {
    path: path.join(__dirname,'..', 'dist'),
    filename: 'js/[name].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('../public/css/style.css'),
    new HtmlWebpackPlugin({
      template: 'html/index.ejs', // Load a custom template (ejs by default see the FAQ for details)
    })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      use: [
        { loader: 'react-hot-loader' },
        { loader: 'babel-loader' }
      ],
      exclude : /node_modules/,
      include: path.join(__dirname,'..','src')
    },
    {
      test: /\.(css|sass|scss)$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        { loader: 'sass-loader' }
      ]
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: './assets/fonts/[name].[ext]'
          }
        }
      ]
    },
    {
      test: /\.(png|gif|svg|jpeg)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: './assets/iamges/[name].[ext]'
          }
        }
      ]
    }
  ]
  },
  resolve: {
    extensions: ['.react.js', '.js', '.jsx'],
    alias: {
      actions: path.join(__dirname,'..', "src", "js", "actions"),
      reducers: path.join(__dirname,'..', "src", "js", "reducers"),
      containers: path.join(__dirname,'..', "src", "js", "containers"),
      components: path.join(__dirname,'..', "src", "js", "components"),
      store: path.join(__dirname,'..', "src", "js", "store"),
      utilities: path.join(__dirname,'..', "src", "js", "utilities")
    },
    modules: [ //I should move all of them as aliases
      path.join(__dirname,'..', "node_modules"),
      path.join(__dirname,'..', "src", "js")
      ]
  },
};
