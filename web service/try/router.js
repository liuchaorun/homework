/**
 * Created by lcr on 17-3-25.
 */
const router = require('koa-router')();
const model = require('../database/model');
const renderer = require('../ect/view');
const md5 = require('md5');
let users = model.users;
router.get('/',async (ctx,next)=>{
    if(ctx.cookies.get('user',{signed:true})===undefined) {
        ctx.body = await renderer('1.ect', {});
    }
    else{
        ctx.body = await renderer('3.ect', {username:a});
    }
    await next();
});
router.post('/action=signup',async (ctx,next)=>{
    ctx.custom_username = ctx.request.body.username;
    ctx.custom_password = ctx.request.body.password;
    let user = await users.count({where:{phonenumber:ctx.custom_username.toString()}});
    if(user===1) ctx.body="注册失败，该用户名已存在！";
    else {
        ctx.body=await renderer('2.ect', {});
        users.create({
            phonenumber:ctx.custom_username.toString(),
            password:ctx.custom_password.toString()
        }).then(p=>{
            console.log(`creat`+JSON.stringify(p));
        }).catch(err=>{
            console.log(`failed:`+err);
            ctx.body=`注册失败`+`err`;
        });
    }
    await next();
});
router.post('/action=login',async (ctx,next)=>{
    ctx.custom_username = ctx.request.body.username;
    ctx.custom_password = ctx.request.body.password;
    let user = await users.findOne({where:{phonenumber:ctx.custom_username.toString()}});
    if(user.password===ctx.custom_password){
        ctx.cookie.set('user',md5(ctx.custom_username.toString()),{maxAge:5555555555});
        ctx.body = await renderer('3.ect', {username:ctx.custom_username});
    }
    else ctx.body="密码错误";
    await next();
});
module.exports=router;