/**
 * Created by liuchaorun on 2017/3/29.
 */
const config = require('./config');
const Sequelize = require('sequelize');
let sequelize = new Sequelize(config.database,config.username,config.password,{
    host:config.host,
    dialect:'postgres',
    pool:{
        max:5,
        min:0,
        idle:3000
    }
});
sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        boolean:true
    },
    phoneNumber:Sequelize.STRING(11),
    passWord:Sequelize.STRING(16)
},{
    timestamps:false
});