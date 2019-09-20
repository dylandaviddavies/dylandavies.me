const path = require("path");
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = {
    mode: 'production',
    entry: {
        "../public/dist/index/assets/": "./src/scripts/index.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: "[name]/js/bundle.min.js"
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
                            importLoaders: 1
                        }
                    },
                    {
                        loader:'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer({
                                grid:true
                            })]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['./node_modules']
                        },
                    }
                ],
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-classes']
                    },
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name]/css/bundle.min.css",
            chunkFilename: "[id].css"
        }),
        new OptimizeCSSAssetsPlugin({})
    ]
}