/**
 * Created by lcr on 17-3-25.
 */
const router = require('koa-router')();
const model = require('../database/model');
let users = model.users;
router.post('/action=login',async (ctx,next)=>{
    ctx.custom_username = ctx.request.body.username;
    ctx.custom_password = ctx.request.body.password;
    users.findOne({where:{phonenumber:ctx.custom_username.toString()}}).then(user=>{
        if(user==null) {

            users.create({
                phonenumber:ctx.custom_username.toString(),
                password:ctx.custom_password.toString()
            }).then(p=>{
                console.log(`creat`+JSON.stringify(p))
            }).catch(err=>{
                console.log(`failed:`+err);
            });
        }
        else ctx.custom_staus=0;
    });
    await next();
});
module.exports=router;