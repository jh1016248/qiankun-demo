const IS_PRO = import.meta.env.MODE === 'production'
const PROD_HOST = 'http://www.john-online.cn'
export default [
    {
        name: 'vue2',
        entry: (IS_PRO ? PROD_HOST : 'http://localhost:7002') + '/vue2/',
        container: '#container',
        activeRule: '/qiankun/vue2',
    },
]