'use strict';

var fs = require('fs');
var path = require('path');
var bodyparser = require('body-parser');
var multer  = require('multer');
var upload = multer({dest: './uploads/'})
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
    .post(upload.array('words', 2), function (req, res) {
      console.log('HELLO :::::::::   ', req.files);
      if (req.files[0] && req.files[1]) {
        findWords(req.files[0].path, req.files[1].path, function (data) {
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
/*    .post(upload.array('words', 2), function (req, res, next){
      console.log(req.body) // form fields
      console.log(req.files[0]) // form files
      console.dir(req.headers['content-type']);
      res.status(204).end()
    })*/

}
