import homeView from './pages/Home.vue'
import Test from './pages/Test.vue'
const routes = [
    {
        path: '/',
        name: 'homeView',
        component: homeView,
    },
    {
        path: '/test',
        name: 'Test',
        component: Test,
    },
]

export default routes