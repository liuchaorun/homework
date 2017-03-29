/**
 * Created by lcr on 17-3-25.
 */
const router = require('koa-router')();
const Uesr = sequelize.import('../database/model');
Uesr.create({
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
// router.get('/action=login',async (ctx,next)=>{
//     console.log('success');
// });
// module.exports=router;