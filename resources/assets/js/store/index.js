import Vue from 'vue';
import VueStore from 'vuex';
Vue.use(VueStore)

import app from './modules/app'
import getters from './getters'

const store = new VueStore.Store({
    state: {

    },
    getters,
    mutations: {

    },
    modules: {
        app
    },
    actions: {

    }
})
