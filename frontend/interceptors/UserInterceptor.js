import axios from 'axios';

const port = import.meta.env.VITE_BACKEND_PORT;
const instance = axios.create({
  baseURL: port,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token');
  return config;
});

export default instance;
