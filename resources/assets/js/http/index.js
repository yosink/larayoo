import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://laravel.app/api',
    timeout: 5000
})

instance.interceptors.request.use(config => {
    return config;
}, error => {
    console.log(error)
})

instance.interceptors.response.use(response => response, error => {
    console.log(error);
    return Promise.reject(error)
})

export default instance