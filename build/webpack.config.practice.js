const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')

let config

const devServer = {
  port: 8080,
  host: '0.0.0.0',
  overlay: {
    errors: true,
  },
  hot: true
}

const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV:  '"development"'
    }
  }),
  new HTMLPlugin({
    template: path.join(__dirname, './template.html')
  })  
]

config = merge(baseConfig, {
  entry: path.join(__dirname, '../practice/index.js'),
  module: {
    rules: [
      {
        test: /\.styl/,
        use: [
          'vue-style-loader',
          'css-loader',
          // {
          //   loader: 'css-loader',
          //   options: {
          //     module: true,
          //     localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]'
          //   }
          // },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            }
          },
          'stylus-loader'
        ]
      }
    ]
  },
  devtool: '#cheap-module-eval-source-map',
  devServer,
  resolve: {
    alias: {
      // 'vue': path.join('/Users/alexandra/Documents/JV/zp/vue-todo-tech/node_modules/vue/dist/vue.esm.js')
      'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
    }
  },
  plugins: defaultPlugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()        
  ])    
})

module.exports = config
