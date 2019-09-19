     const path = require("path");
     //  导入提取样式的webpack插件
     const ExtractTextPlugin = require("extract-text-webpack-plugin");
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
                 }
             ]
         },
         plugins: [
             new ExtractTextPlugin('style/style.css') // 提取到dist的style文件夹中
         ]
     }