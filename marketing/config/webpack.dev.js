const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
/* can't use import and export at this level
Don't let VS Code translate to
import { merge } from 'webpack-merge'; // no
....
export default merge(stuff); // no
*/

const devConfig = {
    
  mode: 'development',
  devServer: {
    port: 8081,
    historyApiFallback: {
        index: 'index.html'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/content',
      },
      shared: packageJson.dependencies // automatically share all dependencies
      //shared: ['react', 'react-dom']
    })
  ],
}

module.exports =  merge(commonConfig, devConfig);