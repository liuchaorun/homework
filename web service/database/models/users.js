/**
 * Created by liuchaorun on 2017/3/30.
 */
const database = require("../database");
module.exports=database.defineModel('users',{
    phonenumber:{
        type:database.STRING(11),
        unique:true},
    password:database.STRING(16)
});
