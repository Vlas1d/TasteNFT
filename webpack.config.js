const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const optimization = () => {
    return config = {
        splitChunks: {
            chunks: 'all'
        },
        minimize: true,
        minimizer: [
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ["gifsicle", { interlaced: true }],
                            ["jpegtran", { progressive: true }],
                            ["optipng", { optimizationLevel: 5 }],
                            "imagemin-svgo",
                        ],
                    },
                },
                loader: false, // Вимкнути вбудований loader, щоб зберегти оригінал
                deleteOriginalAssets: false, // Не видаляти оригінальні файли
                generator: [
                    {
                        filename: '[name].webp',
                        type: "asset",
                        implementation: ImageMinimizerPlugin.imageminGenerate,
                        options: {
                            plugins: ["imagemin-webp"],
                        },
                    },
                ],
            }),
        ]
    }
}

module.exports = {
    entry: { //вхідна точка
        main: '/src/index.tsx'
    },

    output: { //вихідна директорія
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'build')
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html")
        }),
        new CleanWebpackPlugin(),
    ],

    optimization: optimization(),

    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
                //use: 'ts-loader',
            },
            {
                test: /^((?!\.module).)*s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.module\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { modules: true }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|svg|ico)$/,
                type: 'asset/resource',
                generator: {
                    filename: '[name][ext]',
                },
            },
            {
                test: /\.woff2?$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name].[ext]'
                }
            },
        ],
    },

    devServer: {
        static: path.join(__dirname, 'build'),
        compress: true,
        port: 3000,
    },
}