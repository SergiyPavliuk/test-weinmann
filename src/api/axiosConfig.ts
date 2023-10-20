import axios from 'axios';
import ApiPaths from './config/ApiPaths';

const axiosInstance = axios.create({
  baseURL: ApiPaths.apiServer,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
