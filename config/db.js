const {Pool} = require('pg');


const pool = new Pool({
    user: process.env.psql_user,
    host: process.env.psql_host,
    port: process.env.psql_port,
    database: process.env.psql_database,
    password: process.env.psql_password,
});

module.exports = pool;