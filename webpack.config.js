const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

const env = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public/js'),
  },
  mode: env,
  module: {
    rules: 
    [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader',
                'css-loader'
          ],
        }
      ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
}