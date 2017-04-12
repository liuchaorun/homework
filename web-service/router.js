/**
 * Created by lcr on 17-3-25.
 */
const router = require('koa-router')();
const model = require('./database/model');
const renderer = require('./ect/view');
const md5 = require('md5');
let users = model.users;
router.get('/',async (ctx,next)=>{
    if(ctx.cookies.get('user',{})===undefined) {
        ctx.body = await renderer('1.ect', {});
    }
    else{
        console.log(ctx.session.user);
        ctx.body = await renderer('3.ect', {username:ctx.session.user});
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
        let md = md5(ctx.custom_username.toString());
        ctx.cookies.set(
            'user',
            md,
            {
                domain: 'localhost',  // 写cookie所在的域名
                path: '/',       // 写cookie所在的路径
                maxAge: 60*60*24*1000*365, // cookie有效时长
                httpOnly: true,  // 是否只用于http请求中获取
                overwrite: true  // 是否允许重写
            }
        );
        ctx.session.user=ctx.custom_username;
        console.log(ctx.session.user);
        ctx.body = await renderer('3.ect', {username:ctx.custom_username});
    }
    else ctx.body="密码错误";
    await next();
});
module.exports=router;