var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

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
        devServer: {
        	host: "localhost",
        	port: "3000",
        	open: true,
        	colors: true,
        	contentBase: path.resolve(__dirname,'build'),
        	overlay: true
        },
        plugins: [
        /* html 模板插件*/
        new HtmlWebpackPlugin({
        	filename: 'index.html',
        	template: 'index.html',
        	inject: true
        }),

        /* 热加载插件*/
        new webpack.HotModuleReplacementPlugin(),

        /* 打开浏览器*/
        new OpenBrowserPlugin({
        	url: 'http://localhost:8080'
        }),

        /* 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）*/
        new webpack.DefinePlugin({
        	__DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })

        ]

        
    }
