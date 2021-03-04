const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
  devServer: {
    contentBase: ['./dist'],
  },
  entry: {
    bundle: [
      'babel-polyfill','./src/index.ts'
    ]
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [ 
          { 
            loader: 'babel-loader',
            options: {
              "presets": [
                [
                  "@babel/preset-env",
                  {
                    modules : false,
                    useBuiltIns: 'usage',
                    corejs: "3.8",
                    debug: true
                  }
                ]
              ]
            }
          }, 
          'ts-loader'
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  plugins: [ new HtmlWebPackPlugin() ]
};