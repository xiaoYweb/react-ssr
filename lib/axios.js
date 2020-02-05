const axios = require('axios');
const isServer = typeof window === 'undefined';

class HttpRequest {
  constructor() {
    this.instance = axios.create();
  }
  getInsideConfig(config) {
    const defaultConfig = {// https://www.kancloud.cn/yunye/axios/234845
      headers: {},
      baseURL: isServer ? 'http://localhost:3001/' : '/'
    }
    return { ...defaultConfig, ...config }
  }
  interceptors() {
    this.instance.interceptors.request.use(config => {
      return config;
    }, err => {
      return Promise.reject(err)
    })
    this.instance.interceptors.response.use(response => {
      return response;
    }, err => {
      return Promise.reject(err);
    })
  }
  request(option) {
    const config = { ...this.getInsideConfig(), ...option }
    // this.interceptors() //
    return this.instance.request(config)
  }
}

module.exports = HttpRequest;