var webpack = require('webpack');
var path = require('path');
var htmlPlugin = require('html-webpack-plugin');
var extractWebpackPlugin = require('extract-text-webpack-plugin');
var extractPlugin = new extractWebpackPlugin({
  filename:'index.css'
})

module.exports = {
  entry:path.resolve(__dirname,'src'),
  output:{
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use:[
          {
            loader: 'babel-loader',
            
            options: {
              compact: false,
              presets: ['react','env','stage-2']
            }
          }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        use:{
          loader:'file-loader',
          options:{
            name:'[name].[ext]',
            outputPath:'img/'
          }
        }
      },
      {
        test:/\.scss$/,
        use:extractPlugin.extract({
          use:['css-loader','sass-loader']
        })
      },
      {
        test: /\.html$/,
        use:['html-loader']
      }
    ]
  },
  plugins:[
    extractPlugin,
    new htmlPlugin({
      template:'src/index.html'
    })
  ]
}
