const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
  },

  mode: process.env.NODE_ENV,

  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './public/index.html'),
    filename: 'index.html',
    inject: 'body'
  })],

  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  devServer: {
    static: path.join(__dirname, 'public'),
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },

}