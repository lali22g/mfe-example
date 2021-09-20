const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 3001,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'MFE1',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/button',
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ],
  module: {
    rules: [
      {
        /* The following line to ask babel to compile any file with extension.js */
        test: /\.m?js$/,
        /* exclude node_modules directory from babel. Babel will not compile any files in this directory*/
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react', // to compile react to ES5
              '@babel/preset-env' /* to transfer any advansed ES to ES5 */,
            ],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
}
