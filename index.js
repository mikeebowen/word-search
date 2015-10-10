'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var time = new Date();

app.listen(port, function () {
  console.log('Server started on port: ' + port + ', at ' + time);
});
git
