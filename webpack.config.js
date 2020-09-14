const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s(a|c)ss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.scss'],
  },
  devServer: {
    inline: true,
    port: 3000,
  },
};
