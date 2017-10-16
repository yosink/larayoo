import Vue from 'vue';
import iView from 'iview';
Vue.use(iView)


import App from './App.vue'
import router from './route'

import * as filters from './filters'

// 注册全局filter
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start()
    next()
})

router.afterEach((to, from) => {
    iView.LoadingBar.finish()
})

const app = new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: `<App/>`
});
