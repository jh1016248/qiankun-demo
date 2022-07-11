import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI)

let instance = null

function render(props = {}) {
  const { container } = props
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

// 本地调试
if (!window.__POWERED_BY_QIANKUN__) {
	render()
}

// bootstrap,mount,unmount 必须使用 async 函数
export async function bootstrap() {
  console.log('bootstrap')
}
// 挂载子应用
export async function mount(props) {
  console.log(props)
  render(props)
}
// 卸载子应用
export async function unmount() {
  instance.$destroy()
}