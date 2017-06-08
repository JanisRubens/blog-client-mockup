var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.join(__dirname,'..','src'),
  devtool: 'eval',
  entry: {
    index: [
    './js/index.js',
    './sass/app.scss'
    ]
  },
  output: {
    path: path.join(__dirname,'..', 'dist'),
    filename: 'js/[name].js',
    publicPath: '/public/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("css/style.css"),
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
      use: ExtractTextPlugin.extract('css-loader!sass-loader')
    },
    { 
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        { 
          loader: 'url-loader',
          options: {
            limit: 10000,
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
            limit: 10000,
            name: './assets/iamges/[name].[ext]'
          }
        }
      ]
    }  
  ]
  },
  resolve: {
    extensions: ['.react.js', '.js', '.jsx'],
    modules: [
      path.join(__dirname,'..', "src", "js"),
      path.join(__dirname,'..', "src", "js", "actions"),
      path.join(__dirname,'..', "src", "js", "reducers"),
      path.join(__dirname,'..', "src", "js", "containers"),
      path.join(__dirname,'..', "src", "js", "components"),
      path.join(__dirname,'..', "src", "js", "store"),
      path.join(__dirname,'..', "node_modules")
      ]
  },
};