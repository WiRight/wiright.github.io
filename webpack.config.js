const webpack = require('webpack'),
  path = require('path');

module.exports = {
  entry: './assets/js/index.js',
  context: __dirname,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/, // во всех css файлах,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/, // во всех js файлах
        exclude: /node_modules/, // исключая папку node_modules
        use: {
          loader: 'babel-loader', // подключаем babel для написания кода в ES2015
          options: {
            presets: 'env' // ES2015
          }
        }
      }
    ]
  },
  plugins: [
    // Настройка библиотеки JQuery
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
  ]
};
