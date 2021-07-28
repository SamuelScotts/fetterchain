const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3002;
const axios = require('axios');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let ledger = [];

app.get('/', (req, res) => {
  res.send(ledger); 
})

app.post('/', (req, res) => {
  if (ledger.length == 0){
    ledger.push(req.body);
    console.log(ledger);
    res.send(ledger);
    axios.post('http://localhost:3000/', req.body);
  } else {
    if (req.body.hash == ledger[ledger.length - 1].hash){
      console.log("Stopped!");
    } else {
      ledger.push(req.body);
      console.log(ledger);
      res.send(ledger);
      axios.post('http://localhost:3000/', req.body);
    }
  }  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})