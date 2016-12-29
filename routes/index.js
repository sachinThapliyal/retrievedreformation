//This is the routes file

var express = require('express');
var routes = express.Router();

//router for root
routes.get('/', function(req, res){
  res.render('index');
});

//router for /misc
routes.get('/misc', function(req, res){
  res.render('misc');
});

module.exports = routes;
