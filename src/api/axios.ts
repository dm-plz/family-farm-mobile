import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.0.35:3030',
  timeout: 5000,
  withCredentials: true,
});

export default axiosInstance;
