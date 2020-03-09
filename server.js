const Koa = require('koa');
const koaBody = require('koa-body');
const Router = require('koa-router');
const next = require('next');
const port = 3000;

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev })
const handler = app.getRequestHandler()

const sessionMiddleware = require('./server/session');
const httpProxy = require('./server/proxy');
const handleSelfApi = require('./server/self');

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()
  
  server.use(koaBody())
  server.use(sessionMiddleware(server))
  server.use(httpProxy())
  handleSelfApi(router)
  server.use(router.routes())

  server.use(async (ctx, next) => {
    // console.log("TCL: ctx", ctx.url, ctx.path)
    // ctx.session = {number: 11}
    await next()
  })
  
  /**
   * ctx {
   *  request: { method: '', url: '', header: {} },
   *  response: { status: 404, message: 'not found', header: {} }
   *  req,
   *  res,
   *  socket,
   *  app: {},
   *  originalUrl: '',
   * } 
   */
  server.use(async (ctx, next) => {//ctx request next 接管
    ctx.req.session = ctx.session;// session 数据同步至 next 的 ctx.req
    await handler(ctx.req, ctx.res)
    // ctx.respond = false;
  })

  server.listen(port, () => {
    console.log(`koa server listening on ${port}`)
  })

})
