//var webpack = require('webpack');
var path = require('path');                 //引入node的path库
//var HtmlwebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: {
        //vendors: ['@angular']
        main:'./app/index.ts'
        
    },
    output: {
        path: path.resolve(__dirname, './../build/'+__dirname.split('\\').pop()),
        publicPath: '',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.vue','.ts','.jsx', '.js']
    },
    module: {
        loaders: [
            // 为webpack指定loaders
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,//正则匹配拓展名为···的文件
                include: path.join(__dirname, './app'),//需要被加载文件的路径
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:'vendors', // 上面入口定义的节点组
        //     filename:'vendors.js' //最后生成的文件名
        // }),
        // new HtmlwebpackPlugin({
        //     filename: 'index.html',
        //     title: 'Angular2 '+ __dirname.split('\\').pop(),
        //     template: path.resolve(__dirname, 'index.html'),
        //     inject: true
        // })
    ],
    devtool: '#eval-source-map'
};

module.exports = config;