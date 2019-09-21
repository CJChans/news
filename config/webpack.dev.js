const base = require("./webpack.base");
//合并webpack的配置
const merge = require("webpack-merge");

// merge接受多个参数，把参数对象合并，后面的对象会覆盖前面的
module.exports = merge(base, {
    mode: "development", //声明当前是开发模式
    devtool: "source-map", // + 生成映射源代码文件
    // + 开发服务配置
    devServer: {
        port: 8080 // 默认端口是8080
    },
})