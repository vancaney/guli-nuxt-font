import axios from 'axios'
const service = axios.create({
    baseURL: 'http://localhost:8086',
    timeout: 20000
})
export default service