//The app file

var express = require('express');
var app = express();
var routes = require('./routes'); //the router 

//set the views directory and views engine
app.set('views', './views');
app.set('view engine', 'ejs')

//expose the static content directory ./public  on http://host:port/content/
app.use('/content', express.static(__dirname + '/public'));

//set the router
app.use('/', routes);

//starting the server
var server = app.listen(8000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});

