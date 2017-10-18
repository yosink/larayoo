import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import Home from '@/pages/Home'
import Dashboard from '@/pages/Dashboard'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'

export default new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            component: Home,
            children: [
                {
                    name: 'Dashboard',
                    component: Dashboard,
                    path: ''
                }
            ]
        },
        {
            path: 'login',
            component: Login
        },
        {
            path: '*',
            component: NotFound
        }
    ]
})
