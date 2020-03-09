function handleSelfApi(router) {
  router.post('/self/setLanguage', async ctx => {
    const { ln } = ctx.request.body;
    ctx.session.ln = ln;
    console.log("TCL: handleProxy -> ctx.request.body", ctx.request.body)
    ctx.body = {
      data: ln,
      code: 200,
      msg: `set language ${ln} success`
    }
  })
  router.post('/self/setName', async ctx => {
    const { name } = ctx.request.body;
    ctx.session.name = name;
    console.log('--->> setName')
    ctx.body = {
      data: null,
      code: 200,
      msg: `set name ${name} success`
    }
  })
}

module.exports = handleSelfApi;
