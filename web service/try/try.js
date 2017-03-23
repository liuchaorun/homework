/**
 * Created by lcr on 17-3-19.
 */
const koa = require('koa');
let app = new koa();
app.use(async (ctx,next)=>{
    console.log(ctx.content.toString());
});
app.listen(3000);