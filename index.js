'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var time = new Date();
var solveWordSearch = require('./lib/solve-word-search');

var theAnswers = solveWordSearch('./WordSearch.txt', './WordList.txt');

console.log(theAnswers);

app.listen(port, function () {
  console.log('Server started on port: ' + port + ', at ' + time);
});
