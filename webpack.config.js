const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const _ = require('lodash');

const config = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    postcss: [require('autoprefixer')(), require('postcss-pxtorem')()]
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader'
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader'
            }

        ]
    },
    resolve: {
        modules: ["src", "node_modules"],
        alias: {
            style: path.resolve(__dirname, 'src/style')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            hash: true
        })
    ],
    devtool: '#eval-source-map'
};
if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        })
    );
}

module.exports = config;