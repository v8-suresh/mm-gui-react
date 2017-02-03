var helpers = require('./helpers');
var commonConfig = require('./webpack.common.js');
var webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: helpers.root('src/app/index.html'),
    filename: 'index.html',
    inject: 'body'
})

module.exports = webpackMerge(commonConfig, {
    output: {
        path: helpers.root('dist'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        sourceMapFilename: '[file].map'
    },
    plugins: [HtmlWebpackPluginConfig],
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});