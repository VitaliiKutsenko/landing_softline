const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const isDev = !isProd;
const filename = item => (isDev ? `[name].${item}` : `[name].[fullhash].${item}`);
const optimization = () => {
  const config = { splitChunks: { chunks: 'all' } };

  if (isProd) {
    config.minimizer = [new TerserWebpackPlugin(), new CssMinimizerPlugin()];

    config.minimize = true;
  }

  return config;
};

const plugins = () => {
  const base = [
    new HtmlWebPackPlugin({
      template: './index.html',
      minify: { collapseWhitespace: isProd },
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public/favicon.ico'),
          to: path.resolve(__dirname, 'build'),
        },
      ],
    }),
    new MiniCssExtractPlugin({ filename: filename('css') }),
  ];

  if (isDev) {
    base.push(new webpack.HotModuleReplacementPlugin());
  }

  return base;
};

const babelOptions = preset => {
  const opts = {
    presets: ['@babel/preset-env'],
    plugins: ['@babel/plugin-proposal-class-properties'],
  };

  if (preset) {
    opts.presets = [...opts.presets, preset];
  }

  return opts;
};

const jsLoaders = () => {
  return [
    {
      loader: 'babel-loader',
      options: babelOptions(),
    },
  ];
};

const cssLoaders = extra => {
  const loaders = [{ loader: MiniCssExtractPlugin.loader }, 'css-loader', 'sass-loader'];

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
};

module.exports = {
  stats: 'errors-only',
  context: path.resolve(__dirname, 'src'),
  entry: { main: ['@babel/polyfill', './index.js'] },
  mode: 'development',
  devtool: isDev ? 'source-map' : false,
  optimization: optimization(),
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, './public'),
      publicPath: '/public',
    },
    port: 3000,
  },
  plugins: plugins(),
  resolve: { extensions: ['.js'] },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: cssLoaders(),
      },
      {
        test: /\.(png|jp(e*)g|svg|woff|woff2|ttf|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      },
    ],
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'build'),
  },
};
