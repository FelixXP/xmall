var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // 页面入口文件配置
    entry : {
        'index': './origin/public/js/index.js'
    },
    // 入口文件输出配置
    output : {
        filename : 'public/js/[name].bundle.js',
        publicPath: '//localhost:3000/'
    },
    module: {
        // 加载器配置
        loaders: [
        {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader!jsx-loader?harmony',
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },
        {
            test: /\.less$/, 
            loader: 'style-loader!css-loader!less-loader'
        },
        {
            test: /\.(png|jpg|gif)$/,
            loader: 'file-loader?name=static/img/[name].[ext]'
        }
        ]        
    },
    // 其他解决方案配置
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.json'],
    },
    // 插件项
    plugins : [
        new htmlWebpackPlugin({
            filename: 'views/index.html',
            template: 'origin/views/index.html',
            inject: 'body',
            chunks: ['index']
        })
    ]
}