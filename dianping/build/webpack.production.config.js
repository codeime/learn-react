var pkg = require('./package.json')
var path = require('path')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var debug = process.env.NODE_ENV !== "production";
module.exports = {
  context: path.join(__dirname),
  devtool: debug ? "inline-sourcemap" : null,
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: './dist/bundle.js'
  },
  optimization: {

    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },
  resolve: {
        // 别名
        alias: {
          @: path.resolve(__dirname,'src')
        },
        // 省略后缀
        extensions:['', '.js','.jsx']
    },

    module: {
      rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        exclude: function (path) {
          var isNpmModule = !!path.match(/(node_modules)/);
          return isNpmModule;
        },
        query: {
          presets: ['react', 'es2015'],
        }
      },
      {
        test: /\.less?$/,
        loader: 'style-loader!less-loader'
                // ?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]
            },
            {
              test: /\.css?$/,
              loader: 'style-loader!css-loader'
                // ?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]
            },
            { 
              test:/\.(png|gif|jpg|jpeg|bmp)$/i,
              // 限制大小5kb
              loader:'url-loader?limit=5000' 
            },  
            { 
              test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
              // 限制大小小于5k
              loader:'url-loader?limit=5000' 
            }
            ]


        },
  plugins: [
    // webpack 内置的 banner-plugin
    new webpack.BannerPlugin("Copyright by wangfupeng1988@github.com."),

    // html 模板插件
     new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'index.html',
          inject: true
        }),

    // 定义为生产环境，编译 React 时压缩到最小
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),

    // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    new webpack.optimize.OccurenceOrderPlugin(),
    
    new webpack.optimize.UglifyJsPlugin({
        compress: {
          //supresses warnings, usually from module minification
          warnings: false
        }
    }),
    
    // 分离CSS和JS文件
    new ExtractTextPlugin('/css/[name].[chunkhash:8].css'), 
    
   

    // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
    })
  ]
}