const ip = require('ip')
const express = require('express');
const app = express();
const port = 8080;

app.use(express.static(__dirname + '/../client/dist/'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

let shuffle = false;

app.get('/status', function(req, res) {
  res.json({ shuffle });
});

app.post('/start', function(req, res) {
  shuffle = true;
  res.send({ shuffle });
});

app.post('/stop', function(req, res) {
  shuffle = false;
  res.send({ shuffle });
});

app.listen(port, () => {
  console.log("Express server has started up.");
  console.log("URL: http://" + ip.address() + ":" + port)
});