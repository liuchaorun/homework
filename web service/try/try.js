/**
 * Created by lcr on 17-3-19.
 */
const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./router');
const app = new koa();
app.use(bodyParser());
app.use(async(ctx,next)=>{
    await next();
});
app
    .use(router.routes())
    .use(router.allowedMethods());
app.use(async ctx=>{
    console.log("aa");
});
app.listen(3000);


