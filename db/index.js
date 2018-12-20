const { Pool } = require('pg')

//const pool = new Pool()

const pool = new Pool({
    user: 'gizmo',
    host: 'database.server.com',
    database: 'projects',
    password: '',
    port: 3211,
})

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    }
}