'use strict';

var fs = require('fs');

module.exports =function (wordSearch, wordList) {
  fs.readFile(wordSearch, 'utf8', function (err, search) {
    if (err) {console.log(err)};
    console.log(search);
    fs.readFile(wordList, 'utf8', function (err, list) {
      var testWordsArray = [];
      var testWords = '';
      // var lengthOfWords = [];
      // var lengthsTrimmed = [];
      list = list.replace(/(\r\n|\n|\r)/gm, ' ').toLowerCase();
      var horizontalStr = search.replace(/(\r\n|\n|\r)/gm, '').toLowerCase();
      var diagonalStrArr = search.replace(/(\r\n|\n|\r)/gm, ',').toLowerCase().split(',');
      var diagonalStr = [];
      for (var i = 0; i < diagonalStrArr.length - 1; i++) {
        diagonalStr.push(diagonalStrArr[i][i]);
      }
      // console.log(diagonalStr);
      // console.log(horizontalStr);
      for (var i = 0; i < list.length; i++) {
        if (list[i] !== ' ') {
          testWords = testWords.concat(list[i]);
        }
        if (list[i] === ' ' || list[i] === '\r\n') {
          testWords = testWords.trim();
          testWordsArray.push(testWords);
          testWords = '';
        }
      }
      for (var i = 0; i < testWordsArray.length; i++) {
        if (horizontalStr.indexOf(testWordsArray[i]) !== -1) {
          console.log(testWordsArray[i], ' found horizontally forwards');
        }
      }
      var reverseStr = horizontalStr.split().reverse().toString();
      for (var i = 0; i < testWordsArray.length; i++) {
        if (reverseStr.indexOf(testWordsArray[i]) !== -1) {
          console.log(testWordsArray[i], ' found horizontally backwards');
        }
      }
    })
  })
}
