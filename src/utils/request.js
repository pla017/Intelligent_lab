import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;
const service = axios.create({
  baseURL: baseURL,
  timeout: 10000,
});

let authStore = null;
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log("request", error);
    Promise.reject(error);
  }
);

//设置响应拦截器
service.interceptors.response.use(
  (res) => {
    if (!res) {
      return null;
    }
    if (res.status === 401 || res.data.code === 401) {
      authStore.apiAuthError(res.data);
      return null;
    }
    if (res.data && res.data.code == 0) {
      return res.data;
    } else {
    }
    return res.data;
  },
  (error) => {
    exception.captureException(error);
    if (error.response && error.response.status === 401) {
      authStore.apiAuthError("401");
    }

    return Promise.reject(error);
  }
);

export default service;
