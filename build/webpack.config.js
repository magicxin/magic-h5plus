const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: {
    main:'./src/main.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname,'../dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
    ]
  },
  resolve: {
    alias: {
      'vue$':'vue/dist/vue.js',
      '@':path.resolve(__dirname,'./src'),
      'pages':path.resolve(__dirname,'./src/pages'),
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
