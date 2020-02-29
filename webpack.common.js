const path = require("path");
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: {
        "/dist/assets": "./src/scripts/index.js"
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name]/css/bundle.css",
            chunkFilename: "[id].css"
        })
    ],
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "[name]/js/bundle.js"
    },
    resolve:{
        alias: {
            '@': path.resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: true
                        }
                    },
                    {loader: 'postcss-loader',
                    options: {
                        plugins: () => [autoprefixer({
                            grid:true
                        })],
                        sourceMap: true
                    },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-transform-classes']
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'css-loader'
                ]
            },
            {
              test: /\.(png|jpe?g|gif|svg|ttf|woff|woff2)(\?.*)?$/,
              use: [
                {
                    loader: 'url-loader',
                    options: {
                        esModule: false,
                        limit: 10000,
                        name:'dist/assets/img/[hash].[ext]' 
                    }
                }
              ]
            },
        ]
    }
}