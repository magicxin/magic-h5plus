const merge = require('webpack-merge')
const path = require('path')
const config = require('../config')
const baseConfig = require('./webpack.config')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const prodConfig = merge(baseConfig, {
  mode: 'production',
  optimization: {
    minimize: true
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../static'),
      to: config.assetsSubDirectory,
      ignore: ['.*']
    }])
  ]
})

module.exports = prodConfig