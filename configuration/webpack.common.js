/* eslint-env node */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  const config = {
    entry: './src/index.tsx',
    output: {
      clean: true,
      asyncChunks: true,
      filename: '[name].js',
      path: path.resolve(__dirname, '../dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        publicPath: '/',
        title: 'Code Jamboree LLC',
        meta: {
          'Content-Type': { 'http-equiv': 'Content-Type', 'content': 'text/html; charset=utf-8' },      
          description: 'IT Consulting Services for frontend, backend, and fullstack web development.',
          viewport: "initial-scale=1, width=device-width"
        }
      }),
      new webpack.EnvironmentPlugin(['NODE_ENV']),
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.png$/i,
          use: [ { loader: 'file-loader' }]
        },
          { test: /\.tsx?/, use: 'ts-loader', exclude: /node_modules/ },
          {
              test: /\.js$/,
              use: 'source-map-loader',
              enforce: 'pre',
              exclude: /node_modules/
          },
          { test: /\.css$/i, use: ['style-loader', 'css-loader'] }
        ],
    },
    resolve: {
      extensions: [
        '.tsx', '.ts', '.js', '.jsx', '.json'],
      fallback: {
        buffer: require.resolve('buffer/'),
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
      },
    },
  };
  return config;
};