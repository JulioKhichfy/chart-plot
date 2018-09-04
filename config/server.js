var express = require('express');

var consign = require('consign');

var bodyParser = require('body-parser');

var expressValidator = require('express-validator');

//var chart = require('chart.js');

//passar o consign como referencia para dentro de uma instancia do express
//por isso é feito após a instancia do express

var app = express();

app.set('view engine', 'ejs');
app.set('views','./app/views');

//middlewares
app.use(express.static('./app/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// parse application/json
//app.use(bodyParser.json())
app.use(expressValidator());

//faz o scan e inclui no servidor
consign()
	.include('/app/routes')
	.then('app/models')
	.then('app/controllers')
	.into(app);

module.exports = app;