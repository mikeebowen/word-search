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
/*var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var path = require('path');
var multer  = require('multer');
var upload = multer({dest: './uploads/'})

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: false
}));

app.get('/', function (req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/', upload.array('words', 2), function (req, res, next){
    console.log(req.body) // form fields
    console.log(req.files[0]) // form files
    console.dir(req.headers['content-type']);
    res.status(204).end()
});

app.listen(3000);*/
