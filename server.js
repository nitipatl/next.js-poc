const Koa = require('koa')
const next = require('next')
const routes = require('./routes')

const isDev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000

const app = next({ dev: isDev })
const handler = routes.getRequestHandler(app)

const toKoaMiddleware = (middleware) => (ctx) => {
    ctx.respond = false
    ctx.res.statusCode = 200
    middleware(ctx.req, ctx.res)
}

app.prepare().then(() => {
    const server = new Koa()

    server.use(toKoaMiddleware(handler))
    server.listen(port)
})