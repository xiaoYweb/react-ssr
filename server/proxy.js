const { $request } = require('../api/http');

function handleProxy() {
  return async(ctx, next) => {
    const url = ctx.url;
    const method = ctx.method.toLowerCase();
    const re = /^\/api/;
    if (!re.test(url)) return await next()
    let res = null;
    const headers = {}
    try {
      if (method === 'get') {
        res = await $request({ url, method, params: ctx.request.query, headers })
      }
      if (method === 'post') {
        res = await $request({ url, method, data: ctx.request.body, headers })
      }
      if (res.code === 600 || res.code === 602) { //session 中设置的token过期删除 或者 token过期对于后端java  删除 前台 cookie 凭证
        ctx.session = null;
      }
      ctx.status = 200;
      ctx.body = res;
    } catch (err) {
      console.log("TCL: handleProxy -> err", err)
      ctx.status = 500;
      ctx.body = 'request err';
    }
  }
}

module.exports = handleProxy;