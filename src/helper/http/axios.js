import axios from 'axios';
import { API_BASE_URL, API_TOKEN } from '../envConfig';

const loginToken = localStorage.getItem('login_token') || ''

axios.interceptors.response.use((response) => response, (error) => Promise.reject(error))

const instance = axios.create({
    baseURL : 'http://192.168.0.2:8000/api/',
    headers : {
        Accept : 'application/json',
        Authorization : `Bearer ${loginToken}`
    }
})

export default instance