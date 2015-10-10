'use strict';

var express = require('express');
var app = express();
var easyAsync = require('easy-async');
var fs = require('fs');
var port = process.env.PORT || 3000;
var time = new Date();

function getFileData (callback) {
  var output;
  fs.readFile('./WordSearch.txt', 'utf8', function (err, data) {
  if (err) throw err;
    console.log(data);
    return data.toString(data);
    callback();
  });
  // console.log(output);
  // return output;
}

function makeCallback (callback) {
  console.log('info');
  callback();
}
easyAsync.start(getFileData)
.then(makeCallback);
// var exampleTask = function(callback){
//   var count = 1;
//   console.log('starting task', count);
//   setTimeout(function(){
//     console.log('done with task' count);
//     count++;
//     callback();
//   }, 1000);
// }

// easyAsync.start(exampleTask)
// .then(exampleTask)
// .then(exampleTask)
// .then(function() {
//   console.log('continuing after tasks in series');
// });


app.listen(port, function () {
  console.log('Server started on port: ' + port + ', at ' + time);
});
