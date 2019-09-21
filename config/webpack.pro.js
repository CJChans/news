const base = require("./webpack.base");
//合并webpack的配置
const merge = require("webpack-merge");

// merge接受多个参数，把参数对象合并，后面的对象会覆盖前面的
module.exports = merge(base, {
    mode: "production", //声明当前是生产模式


})