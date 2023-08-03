const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');


module.exports = {
    entry: { //вхідна точка
        main: '/src/index.tsx'
    },

    output: { //вихідна директорія
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html")
        }),
        new CleanWebpackPlugin(),
        new ImageminWebpWebpackPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
                //use: 'ts-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                use: [
                    {
                        loader: 'webp-loader',
                        options: {
                            quality: 70
                        }
                    },
                    {
                        loader: 'file-loader'
                    }
                ]
            },
        ],
    },

    devServer: { //дев сервер
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
    },
}