const express = require('express');
const db = require('./db');
const { Pool } = require('pg')

const app = express();
const port = process.env.port || 3004;

app.use(express.static('public'))


const pool = new Pool({
    database: 'projects'
})

app.get('/related', (req, res, next) => {
    pool.query('SELECT id, name, blurb FROM projects', (err, result) => {
        if (err) {
            return next(err)
        } else {
            console.log('success')
            res.send(result.rows[107])
        }
        //res.send(res.rows[0])
    })
})

app.listen(port, 'localhost');

console.log(`server listening on port ${port}`)






// const db = require('mysql');

// db.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'my_db'
// })

