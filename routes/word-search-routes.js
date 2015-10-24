'use strict';

var fs = require('fs');
var path = require('path');
var bodyparser = require('body-parser');

module.exports = function (router) {
  router.use(bodyparser.json());
  router.use(bodyparser.urlencoded({
  extended: true
}));

  router.route('/searchwords')
    .post(function (req, res) {
      console.log(req.file);
      res.redirect('back');
    })

}
