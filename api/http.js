const HttpRequest = require('../lib/axios');

const http = new HttpRequest();

function get(url, data = {}) {
  const option = { type: 'get', url, data }
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

const $request = (config = {}) => {
  return new Promise((resolve, reject) => {
    http.request(config)
      .then(({ data }) => resolve(data), err => reject(err))
  })
}

module.exports = {
  get, $request
}