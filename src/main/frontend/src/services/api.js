// services/api.js
import axios from 'axios';

const API_BASE_URL = 'https://recall-final-backendtest.onrender.com/api'; // 예시 백엔드 URL

export const fetchTestData = async () => {
  console.log("axios 호출 시작");
  try {
    // const response = await axios.get(`${API_BASE_URL}/test`);
    const response = await axios.get(`${API_BASE_URL}/test`);
    console.log("받은 데이터: ", response.data);
    return response.data;
  } catch (error) {
    console.error('데이터를 가져오는 데 실패했습니다:', error);
    return null;
  }
};