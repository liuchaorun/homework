/**
 * Created by lcr on 17-3-19.
 */
const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./router');
const app = new koa();
const session = require("koa-session2");
const Store = require("./store.js");
app.use(bodyParser());
app.use(session({
    store: new Store()
}));
app.use(async(ctx,next)=>{
    if(ctx.session.view===undefined) ctx.session.view=0;
    else ctx.session.view++;
    console.log(ctx.session.view);
    await next();
});
app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(3000);


