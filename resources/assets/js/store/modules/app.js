import Cookie from 'js-cookie';
import {TOGGLE_SIDEBAR} from '../mutation-types'


export default {
    state: {
        sidebar: {
            opened: Cookie.get('sidebarStatus')
        },
        views: []
    },
    mutations: {
        [TOGGLE_SIDEBAR]: state => {
            if (state.sidebar.opened) {
                Cookie.set('sidebarStatus', 0)
            } else {
                Cookie.set('sidebarStatus', 1)
            }
        }
    },
    actions: {
        toggleSidebar: ({commit}) => {
            commit('TOGGLE_SIDEBAR')
        }
    }
}