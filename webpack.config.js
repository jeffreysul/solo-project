const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/App.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public'),
  },

  mode: process.env.NODE_ENV,
  // mode: 'development',

  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './public/index.html'),
    // filename: 'index.html',
    inject: false
  })],

  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  devServer: {
    static: path.resolve(__dirname, 'public'),
    proxy: {
      '/books': 'http://localhost:3000',
    },
    allowedHosts: ['http://localhost:8080']
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
}