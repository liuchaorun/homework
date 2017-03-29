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
