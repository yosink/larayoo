import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import Home from '@/pages/Home'
import Dashboard from '@/pages/Dashboard'

export default new VueRouter({
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
        }
    ]
})
