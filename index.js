'use strict';

var express = require('express');
var app = express();
var fs = require('fs');
var Promise = require('promise');
var read = Promise.denodeify(fs.readFile);
var write = Promise.denodeify(fs.writeFile);
var port = process.env.PORT || 3000;
var time = new Date();

function getFileData () {
  var output;
  fs.readFile('./WordSearch.txt', 'utf8', function (err, data) {
  if (err) throw err;
    // console.log(data);
    return data.toString(data);
  });
  // console.log(output);
  // return output;
}

var p = read('./WordSearch.txt', 'utf8')
        .then(function (str) {
          // console.log(str);
          return str;
        })
        .then(function (str) {
          // console.log(str);
          read('./WordList.txt', 'utf8')
          .then(function (words) {
            var testWordsArray = [];
            var testWords = '';
            // console.log(words, str);
            for (var i = 0; i < words.length; i++) {
              if (words[i] !== ' ') {
                testWords += words[i];
              }
              if (words[i] === ' ') {
                testWordsArray.push(testWords);
                testWords = '';
              }
            }
            for (var i = 0; i < testWordsArray.length; i++) {
              testWordsArray[i].trim();
            }
                console.log(testWordsArray);
          })
        })
var num = 1;
function test () {
  console.log(num);
  num++;
}

var promise = new Promise(function(resolve, reject) {
  resolve(1);
});

// promise.then(function (val) {
//   console.log(val); // 1
//   return val++;
// }).then(function (val) {
//   console.log(val); // 3
//   return val++;
// }).then(function (val) {
//   console.log(val);
//   return val;
// });

promise.then(function(val) {
  console.log(val); // 1
  return val + 2;
}).then(function(val) {
  console.log(val); // 3
  return val + 2;
}).then(function (val) {
  console.log(val);
  return num = val;
});

console.log('NUM : ', num);


app.listen(port, function () {
  console.log('Server started on port: ' + port + ', at ' + time);
});
