const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: ['./src/js/app.js', './src/styles/styles.scss'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'src/js/app.js'
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract(
                    {
                        use: 'css-loader?importLoader=1'
                    })
            },
            {
                test: /\.(scss|sass)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([path.resolve(__dirname, 'build/')]),
        new ExtractTextPlugin({
            filename: 'src/styles/app-base.css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            title: 'Drexel Univseristy Theta Tau',
            filename: path.resolve(__dirname, 'build/src/index.html')
        })
    ]
}