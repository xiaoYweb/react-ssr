const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')

const server = new Koa()
const router = new Router()


server.use(koaBody())

const port = 3001;

server.use(async (ctx, next) => {
  const path = ctx.path;
  if (path === '/api/getList') {
    console.log('/api/getList')
    ctx.body = {
      data: {
        name: 'leo', age: 11
      },
      msg: 'success',
      code: 200
    }
    // ctx.body = 'error'
    // ctx.status = 500
  } else {
    await next()
  }
})
router.get('/api/getHomeList', async ctx => {
  console.log('--->> getHomeList')
  ctx.body = {
    data: [
      {id: 1 , title: 'Node.js  实现抢票小工具 & 短信通知提醒'},
      {id: 2 , title: '7 个沙雕又带有陷阱的 JS 面试题'},
      {id: 3 , title: '重构：从kfc点单发现状态模式'}
    ],
    code: 200,
    msg: 'success'
  }
})

server.use(router.routes())

server.listen(port, () => {
  console.log(`koa server is listening ${port}`)
});

