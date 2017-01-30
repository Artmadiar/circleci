// server.js
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');

const port = 8000;

const app  = express();

require('./app/routers')(app, {});

app.use(bodyParser.urlencoded({ extended: true }));

function stop() {
//  app.close();
};

function start() {

  app.listen(port, () => {
    console.log('We are live on ' + port);
  });

};

module.exports.start = start;
module.exports.stop = stop;
