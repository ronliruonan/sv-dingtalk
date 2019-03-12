// Koa2中，导入的是一个class，so需要使用大些Koa表示
const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser')
const axios = require('axios')

const getFawen = require('./request/getFawen');
const getGonggao = require('./request/getGonggao');

app.use(async (ctx, next) => {
    // 打印URL
    console.log(`${ctx.request.method} ${ctx.request.url}`)
    // 调用下一个middleware
    await next()
})
app.use(async (ctx, next) => {
    const start = new Date().getTime()
    await next()
    const ms = new Date().getTime() - start;
    console.log(`Time: ${ms}ms`)
    console.log('----------------------')
})

router.get('/get', async (ctx, next) => {
    let url = ctx.request.url;
    ctx.body = url
});
router.get('/hello/:name', async (ctx, next) => {
    let name = ctx.params.name;
    ctx.body = `<h1>Hello, ${name}!</h1>`
})
router.get('/', async (ctx, next) => {
    ctx.body = `<h1>Index</h1>
    <form action="/signin" method="post">
        <input name="name">
        <input name="password" type="password">
        <input type="submit" value="Submit">
    </form>`
})
router.post('/signin', async (ctx, next) => {
    let { name, password } = ctx.request.body;

    if (name === 'koa' && password === '123456') {
        ctx.body = `Welcome, ${name}`
    } else {
        ctx.body = `failed, please try agin`
    }
})

router.get('/ding/index', async (ctx, next) => {
    try {
        let [fawen, gonggao] = await Promise.all([getFawen(), getGonggao()]);
        ctx.body = JSON.stringify([fawen, gonggao]);
    } catch (error) {
        ctx.body = JSON.stringify(error)
    }
})

app.use(bodyParser())
app.use(router.routes())
app.listen(3001, () => {
    console.log('[demo] is starting at port 3001')
})
