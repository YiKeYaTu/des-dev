const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session  = require('koa-session')

const path = require('path')

const index = require('./routes/index')
const api = require('./routes/api')

// error handler
onerror(app)

const CONFIG = {
  key: 'koa:sess', 
  maxAge: 86400000,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
  renew: false, 
}
 
// // middlewares
app.keys = ['some secret hurr']
 
app.use(session(CONFIG, app))
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static-plus')(path.join(__dirname, '../frontend/build/static'), {
  pathPrefix: '/static'
}))

app.use(views(path.join(__dirname, '../frontend/build'), {
  extension: 'html'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// app.use(async (ctx, next) => {
//   if (ctx.request.url.match(/^\/api\//)) {
//     if (!ctx.session.uid) {
//       return ctx.body = {
//         status: 400,
//         msg: '请登陆'
//       }
//     }
//   }
//   await next();
// })

// routes
app.use(api.routes(), api.allowedMethods())
app.use(index.routes(), index.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
