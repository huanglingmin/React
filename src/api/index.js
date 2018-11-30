import axios from 'axios';
import { stringify } from 'qs';

var instance = axios.create({
  baseURL: '/api',
  timeout: 10000,
  withCredentials: true,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
  // 定义可获得的http响应状态码
  // return true、设置为null或者undefined，promise将resolved,否则将rejected
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  }
});

// 添加一个请求拦截器
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  if (config.method === 'post' && config.data.constructor !== FormData) {
    config.data = stringify(config.data);
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 添加一个响应拦截器
instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error.response.data);
});

// 将请求数据的方式包装成一个对象
let api = {};
let likeGet = ['delete', 'get', 'head', 'options'];
let likePost = ['post', 'put', 'patch'];

api.request = function () {
  let isPost = arguments[0];
  let method = arguments[1];
  let url = arguments[2];
  let data = arguments[3];
  let config = {
    method,
    url,
    responseType: 'json'
  };

  config[isPost ? 'data' : 'params'] = data;

  return new Promise(function (resolve, reject) {
    instance
      .request(config)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

likeGet.forEach(method => {
  api[method] = function () {
    return api.request(false, method, ...arguments);
  };
});

likePost.forEach(method => {
  api[method] = function () {
    return api.request(true, method, ...arguments);
  };
});

api['pathUpload'] = '/api/upload';

export default api;