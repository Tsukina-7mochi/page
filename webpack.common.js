/* eslint-env node */
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const srcPath  = path.join(__dirname, 'src');
const destPath = path.join(__dirname, 'docs');

module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.css$/,
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
    main: path.join(srcPath, 'common/main.js'),
    index: path.join(srcPath, 'index/index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: destPath,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(srcPath,  'index/index.html'),
          to:   path.join(destPath, 'index.html')
        },
        {
          from: path.join(srcPath,  'products/products.html'),
          to:   path.join(destPath, 'products.html')
        },
        {
          from: path.join(srcPath,  'products/aseprite-scripts.html'),
          to:   path.join(destPath, 'aseprite-scripts.html')
        },
        {
          from: path.join(srcPath,  'products/byteStreamBuffer.html'),
          to:   path.join(destPath, 'byteStreamBuffer.html')
        },
        {
          from: path.join(srcPath,  'products/crlfuck.html'),
          to:   path.join(destPath, 'crlfuck.html')
        },
        {
          from: path.join(srcPath,  'products/web-vr.html'),
          to:   path.join(destPath, 'web-vr.html')
        }
      ]
    }),
  ],
  stats: {
    builtAt: true,
    errorsCount: true,
    warningsCount: true,
    timings: true,
  }
}