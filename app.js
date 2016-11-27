require('dotenv').config(); // read in .env file and parse it

var express = require('express');
var app = express()
var Sequelize = require('sequelize');
var cors = require('cors'); // Cross Origin Resource Sharing
var bodyParser = require('body-parser');
var yelp = require('./api/yelp');


app.use(cors());
app.use(bodyParser());

app.get('/results/:s/:l/:f?', function(request, response) {
  yelp.search({ term: request.params.s, location: request.params.l, category_filter: request.params.f}).then(function(results) {
    response.json(results);
  }, function(err) {
    response.json(err);
  });
});

 app.listen(3000)

