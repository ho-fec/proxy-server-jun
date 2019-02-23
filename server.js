const express = require('express');
const morgan = require('morgan');
const path = require('path');
const parser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

let id = Math.floor(Math.random() * 100);

app.get('/productDetails', (req, res) => {
  axios
  .get(`http://localhost:3002/productDetails/${id}`)
  .then(({data}) => res.status(200).json(data))
  .catch(err => res.status(404).send(err))
});

app.get('/ratings', (req, res) => {
  axios
  .get(`http://localhost:3003/ratings/${id}`)
  .then(({data}) => res.status(200).json(data))
  .catch(err => res.status(404).send(err))
});

app.get('/similar', (req, res) => {
  axios
  .get(`http://localhost:3004/similar/${id}`)
  .then(({data}) => res.status(200).json(data))
  .catch(err => res.status(404).send(err))
});

app.get('/explores', (req, res) => {
  axios
  .get(`http://localhost:3005/explores/${id}`)
  .then(({data}) => res.status(200).json(data))
  .catch(err => res.status(404).send(err))
});

app.get('/like', (req, res) => {
  axios
  .get(`http://localhost:3004/like/${id}`)
  .then(({data}) => res.status(200).json(data))
  .catch(err => res.status(404).send(err))
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
