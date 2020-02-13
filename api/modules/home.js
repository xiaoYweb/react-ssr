const { get, post } = require('../http');

const home = {
  getList: (...r) => get('/api/getHomeList', ...r),
  setLanguage: (...r) => post('/self/setLanguage1', ...r),
}

export default home;