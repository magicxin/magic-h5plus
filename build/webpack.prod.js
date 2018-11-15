const merge = require('webpack-merge')
const path = require('path')
const config = require('../config')
const baseConfig = require('./webpack.config')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// 使用mini-css-extract-plugin 代替 extract-text-webpack-plugin 并且 extract-text-webpack-plugin 在webpack4 需要使用beta版
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const prodConfig = merge(baseConfig, {
  mode: 'production',
//module: {
//  rules: [{
//    test: /\.css$/,
//    use: [ MiniCssExtractPlugin.loader, "css-loader" ]
//  }]
//},
  plugins: [
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../static'),
      to: config.assetsSubDirectory,
      ignore: ['.*']
    }]),
//  new MiniCssExtractPlugin({
//    // Options similar to the same options in webpackOptions.output
//    // both options are optional
//    filename: "[name].css",
//    chunkFilename: "[id].css"
//  })
  ]
})

module.exports = prodConfig