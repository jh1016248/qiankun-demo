import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory('/qiankun'),
    routes: []
})

router.beforeEach((to, from, next) => {
    if(!history.state || !history.state.current) {
      Object.assign(history.state, {current: from.fullPath})
    }
    next()
})
  
export default router