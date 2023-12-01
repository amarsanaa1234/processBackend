const { Pool } = require('pg');

const pool = new Pool({
    host: "localhost",
    port: 5432,
    database: "chatGPT",
    user: "postgres",
    password: "1234Aa123"
});

module.exports = pool;