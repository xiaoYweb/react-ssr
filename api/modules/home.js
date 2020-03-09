const { get, post } = require('../http');

const home = {
  getList: (...r) => get('/api/getHomeList', ...r),
  setLanguage: (...r) => post('/self/setLanguage', ...r),
  setName: (...r) => post('/self/setName')
}

export default home;