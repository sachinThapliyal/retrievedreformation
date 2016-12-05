//This is the routes file

var express = require('express');
var routes = express.Router();

//router for root
routes.get('/', function(req, res){
  res.send('<html><head><title>Retrieved Reformation</title></head><body><p><b><i>Retrieved Reformation</i></b></body></html>');
});

//router for /misc
routes.get('/misc', function(req, res){
  res.render('misc');
});

module.exports = routes;
