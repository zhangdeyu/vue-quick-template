const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: './build'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style!css!autoprefixer!sass'
            }, 
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url'
            }, 
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url'
            }

        ]
    },
    vue: {
        loaders: {
            'stylus': 'vue-style-loader!css-loader!autoprefixer-loader?browsers=last 2 version!stylus-loader',
            'scss': 'vue-style-loader!css-loader!autoprefixer-loader?browsers=last 2 version!sass-loader',
            'sass': 'vue-style-loader!css-loader!autoprefixer-loader?browsers=last 2 version!sass-loader?indentedSyntax'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'})
    ],
    devtool: '#eval-source-map'
};

module.exports = config;