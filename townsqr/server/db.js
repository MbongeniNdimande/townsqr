const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "tumelo",
    host: "localhost",
    port: 5432,
    database: "townsqr"
});

module.exports = pool;