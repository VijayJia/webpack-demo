const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map', //追踪错误位置
    devServer: {
        contentBase: './dist' //编译, 执行dist目录下的html
    }
})