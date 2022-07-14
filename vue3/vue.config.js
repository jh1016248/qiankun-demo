const { name } = require('./package.json')
module.exports = {
    publicPath: '/vue3',
    lintOnSave: false,
    productionSourceMap: false,
    devServer: {
        host: '0.0.0.0',
        port: 6002,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    configureWebpack: {
        output: {
            library: `${name}-[name]`,
            // 把子应用打包成umd库格式
            // 当我们把 libraryTarget 设置为 umd 后，我们的 library 就暴露为所有的模块定义下都可运行的方式		了，主应用就可以获取到微应用的生命周期钩子函数了
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${name}`,
        },
    },
}
