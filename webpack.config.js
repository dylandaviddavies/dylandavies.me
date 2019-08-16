const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = {
    mode: 'production',
    entry: {
        "../public/dist/bundle.min.js": "./src/scripts/index.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: "[name]"
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
            filename: "[name].css",
            chunkFilename: "[name].css"
        }),
        new OptimizeCSSAssetsPlugin({})
    ]
}