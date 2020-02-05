const { get } = require('../http');

const home = {
  getList: (...r) => get('/api/getHomeList', ...r)
}

export default home;