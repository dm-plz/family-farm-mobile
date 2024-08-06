//FIXME: 서버 작업이 완료되면 axios 모듈 사용으로 수정해야 함
import axios from 'axios';
import {Config} from 'react-native-config';
// import axios from '@/mock/mockAxios';

const axiosInstance = axios.create({
  baseURL: Config.API_BASE_URL,
  timeout: 5000,
  withCredentials: true,
});

export default axiosInstance;
