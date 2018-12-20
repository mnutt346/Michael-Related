const express = require('express');
const db = require('./db');
const app = express();
const port = process.env.port || 3004;

app.use(express.static('public'))

app.get('/related', (req, res, next) => {
    db.query('SELECT name, blurb, fullImg FROM projects', (err, result) => {
        if (err) {
            return next(err)
        } else {
            console.log('success')
            res.send(result.rows)
        }
    })
})

app.listen(port, 'localhost');

console.log(`server listening on port ${port}`)

