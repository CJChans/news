     const path = require("path");
     //  导入提取样式的webpack插件
     const ExtractTextPlugin = require("extract-text-webpack-plugin");
     //该插件负责自动在html文件自动引入文件
     const HtmlWebpackPlugin = require("html-webpack-plugin");
     // 导入清除插件
     const { CleanWebpackPlugin } = require('clean-webpack-plugin');
     //webpack配置
     module.exports = {
         //入口文件
         entry: "./src/index.js",

         // 输出配置
         output: {
             //path.resolve根据当前目录返回绝对路径
             path: path.resolve("dist"),
             filename: "bundle.js"
         },
         module: {
             rules: [{
                     test: /\.css$/,
                     //  use: [
                     //      'style-loader',
                     //      'css-loader',
                     //  ]
                     use: ExtractTextPlugin.extract({ // 提取css
                         fallback: "style-loader",
                         use: ["css-loader"]
                     })
                 },
                 {
                     test: /\.less$/,
                     //  use: [
                     //      'style-loader',
                     //      'css-loader',
                     //      'less-loader'
                     //  ]
                     use: ExtractTextPlugin.extract({ // 提取less
                         fallback: "style-loader",
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
                 }
             ]
         },
         plugins: [
             new ExtractTextPlugin('style/style.css'), // 提取到dist的style文件夹中            
             new CleanWebpackPlugin(), // 调用清除打包目录插件
             new HtmlWebpackPlugin({
                 template: "public/index.html" // template指定默认html模板
             })
         ]
     }