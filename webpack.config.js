var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // 页面入口文件配置
    entry : {
        'index': './origin/public/js/index.js',
        // 'detail': './origin/public/js/detail.js',
        // 'upload': './origin/public/js/upload.js',
        // 'my': './origin/public/js/my.js',
        // 'login': './origin/public/js/login.js'
    },
    // 入口文件输出配置
    output : {
        // path: 'public/',
        filename : 'public/js/[name].bundle.js',
        publicPath: '//localhost:3000/'
    },
    module: {
        // 加载器配置
        loaders: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['react','es2015']
            },
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
            loader: 'file-loader?name=public/img/[name].[ext]'
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
            title: '首页',
            inject: 'body',
            chunks: ['index']
        }),
        // new htmlWebpackPlugin({
        //     filename: 'views/detail.html',
        //     template: 'origin/views/index.html',
        //     title: '商品详情',
        //     inject: 'body',
        //     chunks: ['detail']
        // }),
        // new htmlWebpackPlugin({
        //     filename: 'views/upload.html',
        //     template: 'origin/views/index.html',
        //     title: '发布',
        //     inject: 'body',
        //     chunks: ['upload']
        // }),
        // new htmlWebpackPlugin({
        //     filename: 'views/my.html',
        //     template: 'origin/views/my.html',
        //     title: '发布',
        //     inject: 'body',
        //     chunks: ['my']
        // }),
        // new htmlWebpackPlugin({
        //     filename: 'views/login.html',
        //     template: 'origin/views/index.html',
        //     title: '登录/注册',
        //     inject: 'body',
        //     chunks: ['login']
        // })
    ]
}