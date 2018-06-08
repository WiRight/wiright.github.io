const webpack = require('webpack'),
  path = require('path');

module.exports = {
  entry: {
    index: './assets/js/index.js'
  },
  context: __dirname,
  output: {
    filename: '[name].js',
    publicPath: 'dist',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/, // во всех css файлах,
        exclude: /node_modules/, // исключая папку node_modules
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
      },
      {
        test: /\.(scss|sass)$/, // во всех sass, scss файлах
        exclude: /node_modules/, // исключая папку node_modules
        use: [
          {
            // creates style nodes from JS strings
            loader: 'style-loader',
          },
          {
            // translates CSS into CommonJS
            loader: 'css-loader',
            options: {
              sourceMap: true,
              minimize: true,
              url: false
            }
          },
          {
            // compiles Sass|Scss to CSS
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
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
