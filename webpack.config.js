/* eslint-env node */
const path = require('path');

const srcPath  = path.join(__dirname, 'src');
const destPath = path.join(__dirname, 'bundled');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          'style-loader',
          {
            // CSSを読み込み
            loader: 'css-loader',
            options: {
              url: true,
              sourceMap: true,
            },
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            // CSSを読み込み
            loader: 'css-loader',
            options: {
              url: true,
              sourceMap: true,
            },
          },
          {
            // Sassを読み込み
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                // fiber: require('fibers'),
                fiber: false
              },
              sourceMap: true,
            },
          }
        ],
      },
      {
        // リソースをData URLで埋め込み
        test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
        loader: 'url-loader',
      }
    ]
  },
  entry: {
    main: path.join(srcPath, 'main.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: destPath,
  },
  mode: 'development',
  devtool: 'cheap-source-map',
  stats: {
    builtAt: true,
    errorsCount: true,
    warningsCount: true,
    timings: true,
  },
  watchOptions: {
    ignored: /(node_modules)|(dist)/,
  }
}