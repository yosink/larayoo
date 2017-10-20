import fetch from '@/http'

export function doLogin(email, pwd) {
    const data = {
        'email': email,
        'password': pwd
    }

    return fetch({
        url: '/get_token',
        method: 'post',
        data
    })
}

export function getUserInfo(token) {
    return fetch({
        url: '/get_user',
        method: 'get',
        params: {
            token
        }
    })
}