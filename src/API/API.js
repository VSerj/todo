import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com/todos',
});
