/* eslint-env node */
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");

const TITLE = "Code Jamboree LLC";
const SHORT_TITLE = "Code Jamboree";
const DESCRIPTION = "Consulting for Software as a Service (SaaS)";

module.exports = () => {
  const config = {
    entry: "./src/index.tsx",
    output: {
      clean: true,
      asyncChunks: true,
      filename: "[name].js",
      path: path.resolve(__dirname, "../dist"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        publicPath: "/",
        title: TITLE,
        meta: {
          "Content-Type": {
            "http-equiv": "Content-Type",
            content: "text/html; charset=utf-8",
          },
          description: DESCRIPTION,
          viewport: "initial-scale=1, width=device-width",
        },
      }),
      new WebpackPwaManifest({
        name: TITLE,
        short_name: SHORT_TITLE,
        description: DESCRIPTION,
        start_url: "/",
        crossorigin: "use-credentials",
        lang: "en-US",
        inject: true,
        ios: true,
        filename: "manifest.webmanifest",
        publicPath: "/",
        fingerprints: false,
        icons: [
          {
            src: path.resolve(__dirname, "../src/assets/logo512x512.png"),
            destination: "icons",
            sizes: [384],
            purpose: "maskable",
            ios: true,
          },
          {
            src: path.resolve(__dirname, "../src/assets/logo512x512.png"),
            destination: "icons",
            sizes: [192, 512],
            purpose: "maskable",
          },
        ],
      }),
      new webpack.EnvironmentPlugin(["NODE_ENV"]),
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.png$/i,
          use: [{ loader: "file-loader" }],
        },
        { test: /\.tsx?/, use: "ts-loader", exclude: /node_modules/ },
        {
          test: /\.js$/,
          use: "source-map-loader",
          enforce: "pre",
          exclude: /node_modules/,
        },
        { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
      fallback: {
        buffer: require.resolve("buffer/"),
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
      },
    },
  };
  return config;
};
