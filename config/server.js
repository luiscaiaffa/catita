var express = require('express');
var consign = require('consign');
var multiparty = require('connect-multiparty');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.set('view engine', 'ejs');
app.set('views', './app/views'); // views local
app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(multiparty());
app.use(expressValidator());

consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.then('config/dbConnection.js')
	.into(app)

module.exports = app;