import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: import.meta.env.VITE_API_HOST || 'http://localhost:8000/api'
})

export default clienteAxios