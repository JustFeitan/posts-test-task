const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const mode = process.env.NODE_ENV || "development";
const devMode = mode === "development";
const target = devMode ? "web" : "browserslist"
const devtool = devMode ? "source-map" : undefined;

const plugins = devMode
    ? [
        new ReactRefreshWebpackPlugin(),
    ]
    : [
        new MiniCssExtractPlugin({
            filename: "index.[contenthash].css"
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public', '_redirects'),
                    to: path.resolve(__dirname, "dist"),
                }
            ]
        })
    ]

module.exports = {
    mode,
    target,
    devtool,
    entry: [
        path.resolve(__dirname, 'src', 'index.tsx'),
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.[contenthash].js",
        clean: true,
        assetModuleFilename: "assets/[hash][ext]",
        publicPath: "/"
    },
    devServer: {
        port: 3000,
        hot: true,
        open: false,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
        }),
        new CssMinimizerPlugin(),
        ...plugins
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "resolve-url-loader",
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                type: devMode ? "asset/resource" : "asset",
            },
            {
                test: /\.tsx?$/i,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                    },

                },
            }
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"],
        alias: {
            '@components': path.resolve(__dirname, 'src', 'components'),
            '@hooks': path.resolve(__dirname, 'src', 'hooks'),
            '@models': path.resolve(__dirname, 'src', 'models'),
            '@store': path.resolve(__dirname, 'src', 'store'),
            '@helpers': path.resolve(__dirname, 'src', 'helpers'),
            '@services': path.resolve(__dirname, 'src', 'services'),
        }
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin()
        ]
    },
    performance: {
        hints: false
    }
}
