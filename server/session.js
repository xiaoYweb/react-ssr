const session = require('koa-session');

// const Redis = require('ioredis');
// const RedisSessionStore = require('./store');
// const { redisConfig } = require('../config');
// const redis = new Redis(redisConfig);  

const expire = 2;// 过期时间 （小时）

const sessionMiddleWare = (server) => {
	server.keys = ['secret session keys'];
	const SESSION_CONFIG = {
		key: 'sid',
		maxAge: 1000 * 60 * 60 * expire,
		// store: new RedisSessionStore(redis)
	}
	return session(SESSION_CONFIG, server)
}

module.exports = sessionMiddleWare;