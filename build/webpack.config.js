const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('../config')
const {assetsPath} = require('./utils')
//const ExtractTextPlugin = require('extract-text-webpack-plugin')
// 使用mini-css-extract-plugin 代替 extract-text-webpack-plugin 并且 extract-text-webpack-plugin 在webpack4 需要使用beta版
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let isDev = process.env.NODE_ENV==='development'?true:false
module.exports = {
  entry: {
    main:'./src/main.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname,'../native')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
//    {
//      test: /\.(sa|sc|c)ss$/,
//      use: [
//        process.env.NODE_ENV==='development' ? 'style-loader' : MiniCssExtractPlugin.loader,
//        'css-loader',
//        'postcss-loader',
//        'sass-loader',
//      ],
//    },
      {
        test: /\.(sa|c)ss$/,
        use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader,'css-loader','postcss-loader']
      },{
        test: /\.scss$/,
        use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader,'css-loader','sass-loader',
        'postcss-loader',
        {
          loader: 'sass-resources-loader',
          options: {
             resources: path.resolve(__dirname,'../src/css/common.scss'),
          }
        }]
      },
//    {
//      test: /\.css$/,
//      use: ExtractTextPlugin.extract({
//        fallback: "style-loader",
//        use: "css-loader"
//      })
//    },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
          limit: 10000,
//          name: utils.assetsPath('media/[name].[hash:7].[ext]')
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
          limit: 10000,
//          name: utils.assetsPath('media/[name].[hash:7].[ext]')
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
        	loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$':'vue/dist/vue.js',
      '@':path.resolve(__dirname,'../src'),
      'pages':path.resolve(__dirname,'../src/pages'),
      'css':path.resolve(__dirname,'../src/css'),
      'assets':path.resolve(__dirname,'../src/assets'),
      'components':path.resolve(__dirname,'../src/components'),
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: config.index,
      template: 'index.html'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: assetsPath("css/[name].css")
//    chunkFilename: "[id].css"
    })
//  new ExtractTextPlugin("styles.css")
  ]
}
