// const env = 'development'// development or production
console.log('process.env.NODE_ENV', process.env.NODE_ENV)
const isDev = process.env.NODE_ENV !== 'production';//

/**java数据地址 */
const serverUrl = isDev
? 'http://192.168.5.212:8081'//本地  java数据服务器 url  笑笑本地
: 'http://192.168.5.212:8081';//线上 java数据服务 地址
// const serverUrl = 'http://192.168.5.36:8080';//设置  数据服务器 url
// const serverUrl = 'http://192.168.5.212:8081';//线上 测试地址

/**redis配置 */
const redisConfig = isDev
? {}
: { 
  host: '192.168.5.212', 
  port: 6100, 
  password: 'kYUmAXFSgg9u5w', 
  db: 0, 
  keyPrefix: '' 
};

/*oss token 认证地址*/
// const ossUrl = 'http://192.168.5.112:8090/app/oss/policy'; // 校长
const ossUrl = 'https://app.cjdropshipping.com/app/oss/policy';//线上 阿里云静态 资源上传 (后台获取对应的token地址)

const server_port = 4000;//node 前台服务端口

module.exports = {
  serverUrl, redisConfig, ossUrl, server_port
}