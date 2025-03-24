import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_BASE_URL, 
    timeout: 10000,
});

export default axiosInstance;