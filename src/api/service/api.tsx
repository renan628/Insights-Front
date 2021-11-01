import axios, { AxiosRequestConfig } from 'axios';

const userData =
  sessionStorage.getItem('@SNV') && JSON.parse(sessionStorage['@SNV']);

const api = axios.create({
  baseURL: process.env.REACT_APP_API_DOMAIN,
});

api.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const returnConfig = config;
  return returnConfig;
});

api.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default api;
