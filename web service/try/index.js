/**
 * Created by lcr on 17-3-25.
 */
const a = require('sequelize');
const usr = new a('postgres','postgres','postgres',{
    'dialect': 'postgres',
    'host': 'localhost',
    'port': 5432,
    'timestamp': true
});
let uses = usr.model('uses',{
    id:{type:sequelize.number},
    username:{type:sequelize.string},
    password:{type:sequelize.string}
}, {
        freezeTableName: true
    }
);
uses.create({username:'test',password:'asdfgh'});