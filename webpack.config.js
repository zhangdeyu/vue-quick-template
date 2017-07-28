const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const _ = require('lodash');

const config = {
    entry: './src/app.js',
    output: {
        filename: '[name].[hash:7].bundle.js',
        chunkFilename: 'chunkBundle.[name].[hash:7].js',
        path: path.resolve(__dirname, "dist"),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    postcss: [
                        require('autoprefixer')({
                            browsers: [
                                'last 2 versions',
                                'iOS >= 8',
                                'Safari >= 8',
                                'Android >= 4',
                                '> 1%'
                            ]
                        }), 
                        require('postcss-pxtorem')()
                    ]
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]'
                }
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
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        publicPath: '/',
        compress: true,
        disableHostCheck: true,
        historyApiFallback: true
    },
    devtool: '#eval-source-map'
};
if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false,
                drop_console: true
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    );
}

module.exports = config;