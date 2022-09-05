import axios from "axios";

const api = axios.create({
  baseURL: " https://cdnapi.smotrim.ru/api/v1/",
});

export default api;
