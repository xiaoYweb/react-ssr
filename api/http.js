const HttpRequest = require('../lib/axios');

const http = new HttpRequest();

function get(url, params = {}) {
  const option = { method: 'get', url, params }
  return new Promise((resolve, reject) => {
    http.request(option).then(({data}) => {
      if (data.code === 200) {
        resolve(data.data)
      }
    }).catch(err => {
      console.log("TCL: get -> err")
      reject(err)
    })
  })
}

function post(url, data = {}) {
  const option = { method: 'post', url, data }
  return new Promise((resolve, reject) => {
    http.request(option).then(({data}) => {
      if (data.code === 200) {
        resolve(data.data)
      }
    }).catch(err => {
      console.log("TCL: post -> err")
      reject(err)
    })
  })
}

const $request = (config = {}) => {
  return new Promise((resolve, reject) => {
    http.request(config)
      .then(({ data }) => resolve(data), err => reject(err))
  })
}

module.exports = {
  get, $request, post
}