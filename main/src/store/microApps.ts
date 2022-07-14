const isProd = import.meta.env.PROD
export default [
    {
        name: 'vue2',
        entry: isProd ? 'http://www.john-online.cn/vue2' : 'http://localhost:6001/vue2',
        container: '#container',
        activeRule: '/qiankun/vue2',
    },
    {
        name: 'vue3',
        entry: isProd ? 'http://www.john-online.cn/vue3' : 'http://localhost:6002/vue3',
        container: '#container',
        activeRule: '/qiankun/vue3',
    },
]