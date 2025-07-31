import axios from "axios";

const URL_API = import.meta.env.VITE_URL_API;

const api = axios.create({
  baseURL: URL_API,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
