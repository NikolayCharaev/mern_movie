import axios from 'axios';

const port = import.meta.env.VITE_BACKEND_PORT;
const instance = axios.create({
  baseURL: port,
});

export default instance;
