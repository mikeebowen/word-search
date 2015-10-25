'use strict';

var fs = require('fs');
var path = require('path');
var bodyparser = require('body-parser');
var findWords = require('../lib/solve-word-search');

module.exports = function (router) {
  router.use(bodyparser.json());
  router.use(bodyparser.urlencoded({
  extended: true
}));

  router.route('/')
    .get(function (req, res) {
      res.sendFile(path.join(__dirname + '/index.html'));
    })
/*    .post(function (req, res) {
      fs.readFile(req.body.words, function (err, data) {
        var theWords = data;
        fs.readFile(req.body.wordBlock, function (err, data2) {
          var theWordBlock = data2;
          fs.readFile(path.join(__dirname, '../index.html'), function (err, data3) {
            var theHtml = data3.toString();
            var theAnswers = '';
            findWords(theWordBlock, theWords);
          })
        })
      });
      // console.log(txt);
      res.redirect('back');
    })*/
    .post(function (req, res) {
      if (req.body.words && req.body.words) {
        findWords(req.body.wordBlock, req.body.words, function (data) {
          fs.readFile(path.join(__dirname, '../index.html'), function (err, data2) {
            var theHtml = data2.toString('');
            var hF = data.horizontallyForwards = data.horizontallyForwards.join(', ');
            theHtml = theHtml.replace('<div id="theAnswers"></div>', '<div id="theAnswers"><h5>Horizontally Forward</h5><p>' + hF + '</p><h5>Horizontally Backwards</h5><p>' + data.horizontallyBackwards.join(', ') + '</p><h5>Vertically Forwards</h5><p>' + data.verticallyForwards.join(', ') + '</p><h5>Vertically Backwards</h5><p>' + data.verticallyBackwards.join(', ') + '</p><h5>Diagonally Forwards</h5><p>' + data.diagonallyForwards.join(', ') + '</p><h5>Diagonally Backwards</h5><p>' + data.diagonallyBackwards.join(', ') + '</p></div>');
            res.send(theHtml);

          })
        });
      } else {
        res.sendFile(path.join(__dirname, '../index.html'));
      }
    })

}
