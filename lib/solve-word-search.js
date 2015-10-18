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
      var searchLettersArr = search.replace(/(\r\n|\n|\r)/gm, ',').toLowerCase().split(',');
      var verticalStrTmpArr = [];
      var verticalStr;
      var verticalStrArrLength = searchLettersArr.length - 1;
      var diagonalStrArrLength = searchLettersArr.length - 1;
      var vertIndex = 0;
      var diagIndex = 0;
      var diagonalStrTmpArr = [];
      var diagonalStr;
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
      //loop over letters and get first letter in first row then second letter in second row etc.
      while (diagonalStrArrLength--) {
       for (var i = 0; i < searchLettersArr.length - 1; i++) {
          if (searchLettersArr[i][i + diagIndex]) {
            diagonalStrTmpArr.push(searchLettersArr[i][i + diagIndex]);

          }
        }
        diagIndex++;
      }
      diagonalStr = diagonalStrTmpArr.join('');
      // Search the diagonal string for the search words
      for (var i = 0; i < testWordsArray.length; i++) {
        if (diagonalStr.indexOf(testWordsArray[i]) !== -1) {
          console.log(testWordsArray[i], ' found diagonally forwards');
        }
      }
      // search the diagonal string backwards
      var reverseDiagStr = diagonalStr.split().reverse().toString();
      for (var i = 0; i < testWordsArray.length; i++) {
        if (reverseDiagStr.indexOf(testWordsArray[i]) !== -1) {
          console.log(testWordsArray[i], ' found diagonally backwards');
        }
      }
      //loop for the length of the array with each line as a value then for each value get the first letter, then the second and so on
      while (verticalStrArrLength--) {
        for (var i = 0; i < searchLettersArr.length - 1; i++) {
          verticalStrTmpArr.push(searchLettersArr[i][vertIndex]);
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
      // search the vertical string backwards
      var reverseVertStr = verticalStr.split().reverse().toString();
      for (var i = 0; i < testWordsArray.length; i++) {
        if (reverseVertStr.indexOf(testWordsArray[i]) !== -1) {
          console.log(testWordsArray[i], ' found vertically backwards');
        }
      }
      // console.log(diagonalStr);
      // console.log(verticalStr);
      // console.log(horizontalStr);
      // Search the horizontal string forwards
      for (var i = 0; i < testWordsArray.length; i++) {
        if (horizontalStr.indexOf(testWordsArray[i]) !== -1) {
          console.log(testWordsArray[i], ' found horizontally forwards');
        }
      }
      // Search the vertical string backwards
      var reverseStr = horizontalStr.split().reverse().toString();
      for (var i = 0; i < testWordsArray.length; i++) {
        if (reverseStr.indexOf(testWordsArray[i]) !== -1) {
          console.log(testWordsArray[i], ' found horizontally backwards');
        }
      }
    })
  })
}
