/*jslint node: true */

//Dependencies
var express = require('express'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	sqlite = require('sqlite3').verbose(),
	Sequelize = require('sequelize'),
	db = new Sequelize('ToDoList', null, null, {
		host: 'localhost',
		dialect: 'sqlite',
		storage: './database/ToDoList.sqlite3'
	});

//Create the application
var app = express();

//Setting up port
var port = process.env.Port || 9002;

// CORS Support
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

// Middleware
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());

//Setting up routes
var taskRouter = require('./routes/tasks'),
	listRouter = require('./routes/lists');
app.use(taskRouter);
app.use(listRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

//Starting server
app.listen(port, function() {
	console.log('Running on PORT: ' + port);
});