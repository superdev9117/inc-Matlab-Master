	//Creates express http server at 127.0.0.1
	var express = require('express'),
		app = express(), //Creates express http server at 127.0.0.1
		bodyParser = require('body-parser'), //Parse response body for json data
		mongoose = require('mongoose'),
		logger = require('morgan'), //morgan server activity logger
		routes = require('./routes/index'), //route to our routes javascript file
		http = require('http');

	app.use(logger('dev')); //Dev logger


	//app.use(bodyParser.json()); //Parse response body into JSON
	/*app.use(bodyParser.urlencoded({
		extended: true
	})); //Not sure really.*/
	app.use(bodyParser.json({limit: '50mb'}));
	app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

	//app.use(bodyParser({uploadDir:'./uploads'}));

	app.use('/routes', express.static(__dirname + '/routes'));

	//Send static files from client
	app.use(express.static(__dirname + '../../client'));

	//Added this line for admin
	app.use(express.static(__dirname + '../../VIEWS'));


	app.use('/', routes); //Handle all requests though our router.

	//Start our server listening on port 3000
	app.listen(3000, function(err) {
		//Handle error
		if (err)
			return handleError(err);
		else
			console.log("Init listening ...\nConnected.\nListening at http://127.0.0.1:3000\n"); //Print out dev url.
	});

	mongoose.Promise = require('q').Promise;
	console.log("\nConfig Mongoose ...\nq.js set as default mongoose promise library\n");

	mongoose.connect('mongodb://localhost:27017/Test', function(err) {

		if (err)
			return handleError(err);
		else
			var db = mongoose.connection;

		console.log("Connecting to MongoDB ...\nConnnected.\nDatabase: Test");
	});

	// app is a callback function or an express application
	module.exports = app;

	if (!module.parent) {
		http.createServer(app).listen(process.env.PORT, function() {
			console.log("Server listening on port 3000");
		});
	}
