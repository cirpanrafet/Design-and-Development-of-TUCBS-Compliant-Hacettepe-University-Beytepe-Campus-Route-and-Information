const Pool = require('pg').Pool
require("dotenv").config()

const pool = new Pool({
    user: 'postgres',
    password: '4399',
    host: 'localhost',
    port: 5432,
    database:'beytepe'

})
module.exports = pool

