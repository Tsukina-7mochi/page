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
        // フォントを文字列としてそのまま参照として解決
        test: /\.(ttf|woff)$/,
        type: 'asset/resource'
      }
    ]
  },
  entry: {
    main: path.join(srcPath, 'main.js'),
    index: path.join(srcPath, 'index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: destPath,
  },
  stats: {
    builtAt: true,
    errorsCount: true,
    warningsCount: true,
    timings: true,
  }
}