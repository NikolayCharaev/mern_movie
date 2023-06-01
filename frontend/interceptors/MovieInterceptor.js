import axios from 'axios';
const apiKey = import.meta.env.VITE_API_KEY;
const port = import.meta.env.VITE_MOVIE_PORT;
const instance = axios.create({
  baseURL: port,
  headers: { 'X-API-KEY': apiKey, 'Content-Type': 'application/json' },
});

export default instance;
