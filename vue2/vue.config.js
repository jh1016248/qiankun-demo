const { name } = require('./package.json')
module.exports = {
    publicPath: '/vue2/',
    productionSourceMap: false,
    assetsDir: 'static',
    devServer: {
        host: '0.0.0.0',
        port: 6001,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    // vue2使用了element-ui，引用字体文件的时候会出现404，需要将字体文件转成base64, 参考链接：https://qiankun.umijs.org/zh/faq#%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BE%AE%E5%BA%94%E7%94%A8%E5%8A%A0%E8%BD%BD%E7%9A%84%E8%B5%84%E6%BA%90%E4%BC%9A-404
    chainWebpack: (config) => {
        config.module
            .rule('fonts')
            .use('url-loader')
            .loader('url-loader')
            .options({})
            .end()
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
