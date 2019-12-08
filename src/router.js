import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
const router = new VueRouter({

    routes: [
        {
            path: '/',
            component: () => import('./views/home')
        },
        {
            path: '/github',
            component: () => import('./views/github/repos')
        },
        {
            path: '/github/repos/:id',
            component: () => import('./views/github/repos/details')
        }
    ]
    // mode:'history'
})

export default router
