const path = require("path");
//  导入提取样式的webpack插件
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//该插件负责自动在html文件自动引入文件
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 导入清除插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 引入vue-loader插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    //入口文件
    // entry: "./src/index.js",

    //多个入口文件
    entry: {
        // about: "./src/about.js",
        main: "./src/main.js",
    },

    // 输出配置
    output: {
        //path.resolve根据当前目录返回绝对路径
        path: path.resolve(__dirname, "../dist"),
        filename: "js/[name].bundle.js",
    },
    // + 优化打包，提取公共模块配置
    optimization: {
        splitChunks: {
            chunks: 'all' // 提取所有文件的共同模块
        }
    },
    //  + 添加模块解释
    resolve: {
        alias: {
            // 1.以后@符号就是src目录
            '@': path.resolve(__dirname, "../src"),
        },
        // 2.省略导入模块时的后缀名。
        extensions: ['.js', '.json', '.vue']
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({ // 提取css
                    fallback: "vue-style-loader",
                    use: ["css-loader"]
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({ // 提取less
                    fallback: "vue-style-loader",
                    use: ["css-loader", "less-loader"]
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/, // 匹配图片文件
                use: [{
                    loader: "file-loader", // 处理图片文件返回链接
                    options: {
                        publicPath: "./images/", //  引入图片时会在路径前面加上该选项
                        outputPath: "images" //  输出到dist下的images目录
                    }
                }]
            },
            //匹配vue的单文件组件
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('style/style.css'), // 提取到dist的style文件夹中            
        new CleanWebpackPlugin(), // 调用清除打包目录插件
        new HtmlWebpackPlugin({
            template: "public/index.html" // template指定默认html模板
        }),
        // vue加载器插件
        new VueLoaderPlugin()
    ]
}