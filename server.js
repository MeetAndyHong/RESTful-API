/**
 * Created by charles on 10/31/16.
 */
// input all of modules  set up
var express = require('express');
var bodyParser = require('body-parser');
var Bear = require('./app/models/bear.js');

var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/wilsons'); // connect to our database

// configuration
app.use(bodyParser.urlencoded({extended: true})); //Returns middleware that only parses urlencoded bodies.
app.use(bodyParser.json()); // return middleware that only parse json
//The process object is a global that provides information about, and control over, the current Node.js process
var port = process.env.PORT || 8080;   // whatever is in the environment variable PORT or 8080;
var router = express.Router();

require('./app/routes')(router);

//all of our routes will be prefixed with  /api
app.use('/api', router);

app.listen(port);
console.log('Magic happens on port' + port);





















