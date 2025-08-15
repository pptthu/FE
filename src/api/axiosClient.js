import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:5000/api', // Đây là URL của Backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// Thêm interceptor để đính kèm JWT token vào mỗi request sau này
axiosClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('accessToken'); // Lấy token từ localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;