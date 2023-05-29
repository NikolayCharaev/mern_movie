import axios from 'axios';
const apiKey = import.meta.env.VITE_API_KEY;
const instance = axios.create({
  baseURL: 'https://kinopoiskapiunofficial.tech/',
  headers: { 'X-API-KEY': apiKey, 'Content-Type': 'application/json' },
});

// instance.interceptors.request.use((config) => {
//   config.headers.Authorization = window.localStorage.getItem('token');
//   return config;
// });

export default instance;
