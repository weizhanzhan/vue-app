import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
const router = new VueRouter({

    routes: [
        {
            path: '/',
            name: 'layout',
            redirect: '/home',
            component: () => import('./components/Layout.vue'),
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('./views/home'),
                    meta: {
                        noTransition: true
                    }
                },
                {
                    path: '/account',
                    name: 'account',
                    component: () => import('./views/account'),
                    meta: {
                        noTransition: true
                    }
                }
            ]
        },

        {
            path: '/github',
            component: () => import('./views/github/repos')
        },
        {
            path: '/github/repos/:id',
            component: () => import('./views/github/repos/details')
        },
        {
            path: '/github/repos/edit/:id',
            component: () => import('./views/github/repos/edit')
        }

    ]
    // mode:'history'
})

export default router
