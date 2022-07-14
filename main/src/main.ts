import { createApp } from 'vue'
import App from './App.vue'
import {
    registerMicroApps,
    runAfterFirstMounted,
    addGlobalUncaughtErrorHandler,
} from 'qiankun'
import router from './router'
import loading from './store/loading'
import microApps from './store/microApps'

createApp(App).use(router).mount('#app')

registerMicroApps(
    microApps,
    {
        beforeLoad: [
            (app) => {
                loading.value = true
                return Promise.resolve()
            },
        ],
        afterMount: [
            () => {
                loading.value = false
                return Promise.resolve()
            },
        ],
    }
)
runAfterFirstMounted(() => {
    console.log('子应用加载完毕')
})
/**
 2. 补取异常
 */
addGlobalUncaughtErrorHandler((event) => {
    console.log(event)
    // const { message } = event
    // 加载失败时提示
    // if (message && message.includes('died in status LOADING_SOURCE_CODE')) {
    //     console.log('微应用加载失败_' + msg)
    // }
})
