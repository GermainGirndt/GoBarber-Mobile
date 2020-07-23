import axios from 'axios';

console.log('starting');
const api = axios.create({
  baseURL: 'http://192.168.0.18:3333',
});

export default api;
