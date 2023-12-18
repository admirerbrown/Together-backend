const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'donation',
    password: 'keypad02',
});


module.exports = pool;