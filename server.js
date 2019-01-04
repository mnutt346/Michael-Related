const express = require('express');
const morgan = require('morgan');
const path = require('path');
//const bodyParser = require('body-parser');
const app = express();
const axios = require('axios')
const port = process.env.PORT || 3000;

//app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
//app.use(bodyParser.json())

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/comments', (req, res) => {
  axios.get('http://localhost:3001/comments', { params: req.query })
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(error => {
      console.log('error getting comments from proxy server');
      res.sendStatus(500);
    })
})

app.post('/comments', (req, res) => {
  axios.post('http://localhost:3001/comments', req.body)
    .then(response => {
      res.status(201).send(response.data)
    })
    .catch(error => {
      console.log('error posting to comments from proxy server');
      res.sendStatus(500)
    })

})

app.get('/projects', (req, res) => {
  axios.get('http://localhost:3002/projects', { params: req.query })
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(error => {
      console.log('error getting projects from proxy server');
      res.sendStatus(500)
    })
})

app.get('/pledges/:id', (req, res) => {
  axios.get('http://localhost:3003/pledges/' + req.params.id)
    .then(response => {
      res.status(200).send(response.data);

    })
    .catch(error => {
      console.log('error getting pledges from proxy server')
      res.sendStatus(500);
    })
})

app.post('/pledges', (req, res) => {
  axios.post('http://localhost:3003/pledges', req.body)
    .then(response => {
      res.status(201).send(response.data);
    })
    .catch(error => {
      console.log('error posting to pledges from proxy server')
      res.sendStatus(500)
    })
})

app.get('/related', (req, res) => {
  //console.log('req.params.id', req.params.id)
  axios.get('http://localhost:3004/related/2') // + req.params.id)

    //axios.get('http://localhost:3004/related', { params: req.query })
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(error => {
      console.log('error getting related from proxy server');
      res.sendStatus(500);
    })
})

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
