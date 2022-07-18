import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import useGlobalState from './store/useGlobalState'

let instance = null
let history = null
let router = null
function render(props = {}) {
    const { container } = props
    history = createWebHashHistory(window.__POWERED_BY_QIANKUN__  ? `${props.name}` : '')
    router = createRouter({
        history,
        routes
    })
    instance = createApp(App)
    instance.use(Antd).use(router).mount(container ? container.querySelector('#app') : '#app')
}


// 本地调试
if (!window.__POWERED_BY_QIANKUN__) {
	render()
}
export async function bootstrap(props) {
    // console.log(props)
}

export function mount(props) {
    useGlobalState(props)
    render(props)
}
export function unmount() {
    instance.unmount && instance.unmount();
	instance._container.innerHTML = '';
	instance = null;
	router = null;
	history && history.destroy();
}