import axios from "axios"; // 引入axios

const BASE_URL = "http://127.0.0.1:8001/api/"

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      post: {
        "Access-Control-Allow-Origin": true
      }
    }
  })
  export const POST = async (endPoint,payload) => {
    try {
      const { data } = await api.post(endPoint, payload);
      return data;
    } catch (e) {
      return [];
    }
  };