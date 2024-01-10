import axios from 'axios';

export const get = (url: string, params: Object = {}) =>
  apiCall('get', url, params);
export const post = (url: string, params: Object, data: Object) =>
  apiCall('post', url, params, data);
export const put = (url: string, params: Object, data: Object) =>
  apiCall('put', url, params, data);

const axiosInstance = axios.create({
  baseURL: 'https://api.npoint.io/',
  timeout: 5000,
});

type TCallMethod = 'get' | 'post' | 'put';

const apiCall = (
  method: TCallMethod = 'get',
  url: string = '',
  params: object = {},
  data: object = {},
) => axiosInstance({method, url, params, data});
