/**
 * Created by liuchaorun on 2017/4/1.
 */
let ect = require('ect');
let renderer = ect({
    root:__dirname,
    ext:'.ect'
});
module.exports=renderer.render;