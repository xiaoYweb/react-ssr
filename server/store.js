const retRedisKey = id => `ssid:${id}`;

class RedisSessionStore {
  constructor(redis) {
    this.redis = redis;
  }

  async get(id) {
    const key = retRedisKey(id);
    // console.log('getSession: id --> ', key);
    try {
      const val = await this.redis.get(key);
      return val ? JSON.parse(val) : null;
    } catch (err) {
      console.log('getSessionVal: --> err', err)
    }
  }

  async set(id, val, expire) {
    const key = retRedisKey(id);
    // console.log('setSession: id --> ', key);
    expire = expire / 1000;//数字 或者能转为数字的 字符串 其他 为nan  在下一步判断 true or false
    try {
      val = JSON.stringify(val);
      await expire ? this.redis.setex(key, Math.ceil(expire), val) : this.redis.set(key, val)
    } catch (err) {
      console.log('setSessionVal: --> err', err)
    }
  }

  async destroy(id) {
    const key = retRedisKey(id);
    // console.log('delSession: id --> ', key);
    try {
      await this.redis.del(key);
    } catch (err) {
      console.log('delSessionVal: --> err', err)
    }
  }
}

module.exports = RedisSessionStore;