'use strict';

var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;
var time = new Date();
var solveWordSearch = require('./lib/solve-word-search');
var wordSearchRouter = express.Router();
var wordSearchRoutes = require('./routes/word-search-routes')(wordSearchRouter);

// solveWordSearch('./WordSearch.txt', './WordList.txt');

app.use(express.static(__dirname + '/'));

app.use('/', wordSearchRouter);

app.listen(port, function () {
  console.log('Server started on port: ' + port + ', at ' + time);
});
