/**
 * Created by lcr on 17-3-25.
 */
const router = require('koa-router')();
const model = require('../database/model');
let users = model.users;
users.create({
    phoneNumber:'13865421895',
    password:'123456789'
}).then(p=>{
    console.log(`creat`+JSON.stringify(p))
}).catch(err=>{
    console.log(`failed:`+err);
});
// router.post('/action=login',async (ctx,next)=>{
//     ctx.custom_username = ctx.request.body.username;
//     ctx.custom_password = ctx.request.body.password;
//     await next();
// });
// module.exports=router;