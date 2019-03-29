// Koa2中，导入的是一个class，so需要使用大写的Koa表示
const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors')

app.use(async (ctx, next) => {
    console.log(`[url] ${ctx.request.method} ${ctx.request.url}`)
    console.log(`[ips]: ${JSON.stringify(ctx.request.ips)}`);
    console.log(`[original]: ${JSON.stringify(ctx.request.originalUrl)}`);

    await next();
});
app.use(async (ctx, next) => {
    const start = new Date().getTime();
    await next();
    const ms = new Date().getTime() - start;
    console.log(`-----分-割-线--Time: ${ms}ms---`)
});

app.use(cors());
// app.use(async (ctx, next) => {
//     ctx.set('Access-Control-Allow-Origin', '*');
//     ctx.set('Access-Control-Allow-Headers', 'x-request-width,content-type,appKey');
//     ctx.set('Access-Control-Allow-Methods', '*');
//     await next();
// })

app.use(bodyParser());
app.use(router.routes());
app.listen(3001, () => {
    console.log(`【DEMO】 is starting at port 3001`)
});

// ------------------------------------------------------------------
router.get('/', async (ctx, next) => {
    ctx.body = { 'Hello': 'World!' }
});

/**
* 需要验证钉钉发送的请求中，通过nginx能否传递appkey和dinguserid
*/
router.post('/jwt/:dingUserId', async (ctx, next) => {
    console.log('[JWT] starting...');
    // console.log(ctx.request);
    // console.log(11010);

    // 0. 检查DingUserId
    const dingUserId = ctx.params.dingUserId;
    if (!dingUserId) return ctx.body = 'do not DingUserId';

    // 1. 验证appkey

    // 2. 请求sso
    // 2.1 如果第一次返回失败，等待30秒，重新发送
    // 2.2 请求sso失败，返回什么 /或者解析token失败，返回错误信息给前端
    const { GETJWT, DECODEJWT } = require('./jwt/getJWT');
    const jwtResult = await GETJWT(dingUserId);

    if (jwtResult.errcode !== 0) return ctx.body = jwtResult;

    // 3. 解析token
    let jwttoken = jwtResult.result,
        decodeJSON = await DECODEJWT(jwttoken);
    if (decodeJSON.errcode !== 0) return ctx.body = decodeJSON;

    // 4. 返回token + 解析后的json
    const { UserName: userName, UserCode: userCode, UserId: userId } = decodeJSON.result.payload;
    ctx.body = {
        'id_token': jwttoken,
        'user_info': {
            'user_name': userName,
            'user_code': userCode,
            'user_id': userId
        }
    };
})
