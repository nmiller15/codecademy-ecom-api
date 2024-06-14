const pg = require('pg');
const { Pool } = pg;

const pool = new Pool();

const db = (text, params, callback) => {
    return pool.query(text, params, callback);
}

module.exports = db;