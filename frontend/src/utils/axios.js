import axios from 'axios';
import { store } from '../store/store';

const axiosInstance = axios.create({
  baseURL: 'http://your-backend-api-url',
});

axiosInstance.interceptors.request.use((config) => {
  const { token } = store.getState().auth;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;