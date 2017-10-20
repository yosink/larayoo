import {getUserInfo} from '@/api/login'
import Cookie from 'js-cookie'

export default {
    state: {
        user: {
            name: '',
            nickname: '',
            avatar: '',
            email: '',
            status: '',
            description: '',
            token: Cookie.get('jwt')
        }
    },
    mutations: {
        SET_NAME: (state,name) => {
            state.name = name
        },
        SET_NICKNAME: (state,nickname) => {
            state.nickname = nickname
        },
        SET_AVATOR: (state,avatar) => {
            state.avatar = avatar
        },
        SET_EMAIL: (state,email) => {
            state.email = email
        },
        SET_STATUS: (state,status) => {
            state.status = status
        },
        SET_DESCRIPTION: (state,description) => {
            state.description = description
        },
    },
    actions: {
        [GET_USERINFO]({commit}) {
            return new Promise((resolve,reject) => {
                getUserInfo(state.token).then(response => {
                    const data = response.data.user
                    commit('SET_NAME', data.name)
                    commit('SET_NICKNAME', data.nickname)
                    commit('SET_AVATOR', data.avatar)
                    commit('SET_EMAIL', data.email)
                    commit('SET_STATUS', data.status)
                    commit('SET_DESCRIPTION', data.description)
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
            
        }
    }
}