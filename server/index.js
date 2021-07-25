const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;
const axios = require('axios');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let ledger = [];

app.get('/', (req, res) => {
  res.send(ledger)
})

app.post('/', (req, res) => {
  ledger.push(req.body);
  console.log(ledger);
  axios.post('http://localhost:3001/', req.body);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})