import axios, { AxiosRequestConfig } from 'axios';

const userData =
  sessionStorage.getItem('@SNV') && JSON.parse(sessionStorage['@SNV']);

const api = axios.create({
  baseURL: process.env.REACT_APP_API_DOMAIN,
});

api.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const returnConfig = config;
  if (userData?.accessToken && returnConfig.headers) {
    returnConfig.headers.Authorization = `Bearer ${userData?.accessToken}`;
  }
  return returnConfig;
});

export default api;
