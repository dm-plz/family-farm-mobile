//FIXME: 서버 작업이 완료되면 axios 모듈 사용으로 수정해야 함
import axios from 'axios';

import {API_BASE_URL} from '@/constants/api';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  withCredentials: true,
});

export default axiosInstance;
