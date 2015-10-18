'use strict';

var fs = require('fs');

module.exports =function (wordSearch, wordList) {
  fs.readFile(wordSearch, 'utf8', function (err, search) {
    if (err) {console.log(err)};
    console.log(search);
    fs.readFile(wordList, 'utf8', function (err, list) {
      var testWordsArray = [];
      var testWords = '';
      list = list.replace(/(\r\n|\n|\r)/gm, ' ').toLowerCase();
      var horizontalStr = search.replace(/(\r\n|\n|\r)/gm, '').toLowerCase();
      var verticalStrArr = search.replace(/(\r\n|\n|\r)/gm, ',').toLowerCase().split(',');
      var verticalStrTmpArr = [];
      var verticalStr;
      var verticalStrArrLength = verticalStrArr.length - 1;
      var vertIndex = 0;
      //turn the list of words into an array of test words to test against
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
      //loop for the length of the array with each line as a value then for each value get the first letter, then the second and so on
      while (verticalStrArrLength--) {
        for (var i = 0; i < verticalStrArr.length - 1; i++) {
          verticalStrTmpArr.push(verticalStrArr[i][vertIndex]);
        }
        vertIndex++;
      }
      //turn the vertical array of vertical letters into a string
      verticalStr = verticalStrTmpArr.join('');
      //search the vertical string for words in the index of words
      for (var i = 0; i < testWordsArray.length; i++) {
        if (verticalStr.indexOf(testWordsArray[i]) !== -1) {
          console.log(testWordsArray[i], ' found vertically forwards');
        }
      }
      var reverseVertStr = verticalStr.split().reverse().toString();
      for (var i = 0; i < testWordsArray.length; i++) {
        if (reverseVertStr.indexOf(testWordsArray[i]) !== -1) {
          console.log(testWordsArray[i], ' found vertically backwards');
        }
      }
/*     for (var i = 0; i < diagonalStrArr.length - 1; i++) {
        diagonalStr.push(diagonalStrArr[i + 1][i]);
      }*/
      // console.log(verticalStr);
      // console.log(horizontalStr);
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
