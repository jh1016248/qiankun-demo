import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './index.css'
import { getStore } from './store'
Vue.config.productionTip = false
Vue.use(ElementUI)

let instance = null
function render(props = {}) {
    const { container } = props
    instance = new Vue({
        router,
        store: getStore(props),
        render: (h) => h(App),
    }).$mount(container ? container.querySelector('#app') : '#app')
}

// 本地调试
if (!window.__POWERED_BY_QIANKUN__) {
    render()
}

export async function bootstrap() {
    console.log(111)
}
export async function mount(props) {
    console.log(props)
    render(props)
}
export async function unmount() {
    instance.$destroy()
}
