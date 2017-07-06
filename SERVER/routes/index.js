var express = require('express'),
	router = express.Router(),
	path = require('path'),
	__parentdirname = path.dirname(module.parent.filename),
	Q = require('q');
	fs = require('fs'),
	octaveHeader = 15,
	exec = require('child-process-promise').exec;

//Ref to panel model
var Panel = require('../models/panel.js');

//Ref to answer model
var Answer = require('../models/answer.js');

//************HTML SECTION***********

//Initial route to our views
router.get('/', function(req, res) {
	//res.sendFile(path.join(__dirname, '../public', 'index1.html'));
	res.sendFile(path.join(__dirname, '../../VIEWS/student/pages', 'main.htm'));
});

// Modified the route to point to our new Admin.
router.get('/admin', function(req, res) {
	//res.sendFile(__parentdirname + '/client/views/admin.html');
	res.sendFile(path.join(__dirname, '../../VIEWS', 'index.html'));
});

// Modified the route to point to Tim Page
router.get('/tim', function(req, res) {
	//res.sendFile(__parentdirname + '/client/views/admin.html');
	res.sendFile(path.join(__dirname, '../../VIEWS/Admin/pages', 'timindex.html'));
});


router.get('/Render', function(req, res) {
	//res.sendFile(__parentdirname + '/client/views/Render.html');
	res.sendFile(path.join(__dirname, '../../client/views', 'Render.html'));
});


router.get('/Empty', function(req, res) {
	//res.sendFile(__parentdirname + '/client/views/Empty.html');
	res.sendFile(path.join(__dirname, '../../client/views', 'Empty.html'));
});

router.get('/test', function(req, res) {
	res.sendFile(path.join(__dirname, '../../client/views', 'test.html'));
	//res.sendFile(__parentdirname + '/client/views/test.html');
});


router.get('/Animation', function(req, res) {
	res.sendFile(path.join(__dirname, '../../client/views', 'Animation.html'));
	//res.sendFile(__parentdirname + '/client/views/Animation.html');
});

router.get('/pdf', function(req, res) {
	res.sendFile(path.join(__dirname, '../../client/views', 'PDF.html'));
	//res.sendFile(__parentdirname + '/client/views/PDF.html');
});

router.get('/table', function(req, res) {
	res.sendFile(path.join(__dirname, '../../client/views', 'Table.html'));
	//res.sendFile(__parentdirname + '/client/views/PDF.html');
});



//***********************************



//************API SECTION************

//Returns the if structure html skeleton
router.get('/api/skeletons/if-skeleton', function(req, res) {
	res.sendFile(__parentdirname + '/client/views/skeletons/if-skeleton.html');
});

//Returns the if-selse structure html skeleton
router.get('/api/skeletons/if-else-skeleton', function(req, res) {
	res.sendFile(__parentdirname + '/client/views/skeletons/if-else-skeleton.html');
});

/******************New Panel GET route*************************
Accepts
	A panel id number
Returns
	{error : err.message} if there is an error finding the panel.
	else The panel object is sent to the caller in json format.

*************************************************************/
router.get('/api/GET/panel/:id', function(req, res) {

	var promise = Panel.findById(req.params.id).exec();

	promise.then(function(panel) {
			res.json(panel);
		})
		.catch(function(err) {
			res.json({
				error: err.message
			});
		})
		.done();
});

/******************New Panels GET route***********************
Accepts
	N/A
Returns
	An array of panel ids

*************************************************************/
router.get('/api/GET/panels', function(req, res) {

	//Make the Query a Q.Promise
	var promise = Panel.find({}).exec();

	//Resolve step: Returns panel ids found by query
	promise.then(function(panels) {

			var panelIds = [];

			panels.forEach(function(panel) {
				panelIds.push(panel);
			});

			res.json(panelIds);
		}) //Catch step: catch any arror thrown by promise.
		.catch(function(err) {
			res.json({
				error: err.message
			});
		})
		.done(); //Clean up.
});

/******************New Module GET route*************************
Accepts
	A module id number
Returns
	{error : err.message} if there is an error finding the module.
	else The module object is sent to the caller in json format.
*************************************************************/
router.get('/api/GET/module/:id', function(req, res) {

	var promise = Module.findById(req.params.id).exec();

	promise.then(function(module) {
			res.json(module);
		})
		.catch(function(err) {
			res.json({
				error: err.message
			});
		})
		.done();
});



/******************New Panel PUT route*************************

Accepts
	A panel object
Returns
	{error : err.message} if there is an error finding the panel.
	else The panel is updated and the Updated message is sent back to client.

*************************************************************/
router.put('/api/PUT/panel', function(req, res) {

	//Get passed in panel object
	var passedPanel = req.body.panel;

	//Get the panel by its Id number
	var promise = Panel.findById(passedPanel._id).exec();

	//Resolve promise
	promise.then(function(panel) {

			//console.log(panel.modules);

			//Loop through panel modules.
			for(var i  = 0; i < panel.modules.length; i++){

				//Get keys within modules
				for (var key in panel.modules[i]){

					//If value exists and is not the _id then assign new value.
					if (passedPanel.modules[i][key] && key != "_id")
						//console.log(panel.modules[i][key]);
						panel.modules[i][key] = passedPanel.modules[i][key];
				}
			}

			//Return save promise
			return panel.save();
		})
		.then(function(panel) {

			//Send back panel object.
			res.send(panel);
		})
		.catch(function(err) {
			res.json({
				error: err.message
			});
		})
		.done();
});

/******************New Panel POST route***********************
Accepts
	N/A
Returns
	{error : err.message} if there is an error saving the panel.
	else The panel saved and returned to the user.
*************************************************************/
router.post('/api/POST/panel', function(req, res) {

	var panel = req.body.panel;
	var name = req.body.name;
	var course = req.body.course;
	var ref = req.body.ref;

	var j = 0;
	var modules = [];
	var correct_Map = new Array();

	var p = new Panel();

	if (name)
		p.name = name

	if (course)
		p.course = course;

	if (ref)
		p.ref = ref;


	panel.forEach(function(module) {

		//Create new  module object
		var m = p.modules.create({});

		//Transfer post module data to model instance
		for(var key in module){
			m[key] = module[key];
		}

		//Create new answer object
		var a = new Answer();

		//Assign panel id since using sub docs
		//a.panelId = p._id;
		//Assign module id to GET answer later
		a.moduleId = m._id;

		//Push module correct answer(s) into the answer correct array
		for (var i = 0; i < module.correct.length; i++){
			a.correct.push(module.correct[i]);
		}

		//Save answer back to DB
		Answer.saveAnswer(a)
			.then(function(result){
				console.log('Answer saved');
			})
			.catch(function(err){
				console.log('Failed to save');
			})
			.done();

		//Push new module to panel module array
		p.modules.push(m);

		//Add in saving panel attributes as well along with modules.
	});


	//Save the panel.
	//If error send error object.
	//Else send the panel back to the caller.
	Panel.savePanel(p)
		.then(function(result) {
			res.json({
				panel: result
			});
		})
		.catch(function(error) {
			res.json({
				error: error.message
			});
		})
		.done();
});

/*
Module parser: Used for the admin page takes in a json string and returns the parsed json object.
*/
router.post('/api/POST/parser', function(req, res) {

	var output = [];
	var modules = req.body.modules;
	var j = 0;

	modules.forEach(function(module) {
		try {
			var parsed = JSON.parse(module);
			output.push(parsed);
			//output[i] = parsed;
		} catch (err) {
			j++;
		}
	});

	res.json({
		error: 'Failed: ' + j,
		modules: output
	});
});

router.put('/api/PUT/answer', function(req, res){

	var passedAnswer = req.body.answer;

	var promise = Answer.findById(passedAnswer._id).exec();

	promise.then(function(answer){
		answer.correct = passedAnswer.correct;
		return answer.save();
	})
	.then(function(answer){
		res.send(answer);
	})
	.catch(function(err){
		res.json({
			error: err.message
		});
	});
});

//Route to get answer object
router.get('/api/GET/answer/:id', function(req, res){
	var promise = Answer.findById(req.params.id).exec();

	promise.then(function (answer) {
		res.send(answer);
	})
	.catch(function (err) {
		 res.json({error: err.message});
	});
});

//Checks for the correct answer returns ture of false depending.
router.post('/api/POST/checkAnswer', function (req, res) {
	//Store values
	var moduleId = req.body.moduleId;

	var ans = req.body.ans;

	var promise = Answer.find({moduleId: moduleId}).exec();

	promise.then(function (result) {

		for(var i = 0; i < result[0].correct.length; i++){
			// console.log(result[0].correct[i]);

			if (result[0].correct.length != ans.length)
				res.send(false);

			if (ans.indexOf(result[0].correct[i]) == -1)
				res.send(false);
		}

		res.send(true);
	})
	.catch(function(err){
		res.json({error: err.message});
	});
});

//Returns a promise when writing to our temp file
var writeToFile = function(input){
	return Q.Promise(function(resolve, reject){

		fs.writeFile(path.join(__dirname, '../../OCTAVE/user-code.m'), input, function(err) {

			if (err) {
				reject(err);
			} else {
				resolve("Success")
			}
		});

	});
}

router.post('/api/POST/octave', function(req, res) {

	var code = req.body.code;

	console.log("Body: " + JSON.stringify(req.body));

	writeToFile(code).then(function(result){

		if (result == 'Success'){
			//console.log('directory = ' + r);
			exec('octave -q ' +  path.join(__dirname, '../../OCTAVE/pizza.m'))
				.then(function(result) {
					console.log("success!");
					var stdout = result.stdout;
					var stderr = result.stderr;
					var workspace = fs.readFileSync(path.join(__dirname, '../../OCTAVE/jsondata'), "utf-8")
					//TODO: ASK Q bout this chunk of code
					// var split = stdout.split('\n');
					//
					// var output = '';
					//
					// for (var i = octaveHeader; i < split.length; i++) {
					// 	output += split[i];
					// }
					//
					console.log(stdout);
					console.log(stderr);
					console.log(workspace);
					res.json({
						stdout: stdout,
						stderr: stderr,
						workspace: workspace
					});
				})
				.fail(function(err) {
					//TODO: Figure out wtf is going on here?
					//Check for Parse or Excution
					console.log("fail!");
					var type = err.message.split("error",3)[0];

					//console.log('type: ' + type);
					var Command = type.split(":")[1];

					//console.log("Command: ", Command);

					var msg = err.message.split("error", 3);
					console.log(err.message);

					if (Command.trim() === "parse"){

						if (msg[2].trim() == ""){
							res.json({
								error: msg[0].trim()
							});
						}
						else{
							res.json({
								error: msg[0].split(":")[0] + " " + msg[2]
							});
						}
					}
					else{
						//Return error on fail
						res.json({
							error: msg[0] + " " + msg[1].split(":")[1]

						});

					}
				})
				.done(function(){

					console.log("Done!");
					//CLean up wipe file
					writeToFile('').then(function(result){
						if (result == 'Success'){
							console.log('Deleted user-code.m contents');
						}
					});
				});
		}
		return result;

	})
	.catch(function(err){
		res.json({error: err.message});
	})
	.done();
});

//L:ists everything in the directory.
router.post('/api/POST/list', function(req, res) {

	//var code = req.body.code;
	var path = __dirname;

	//console.log(req.body);

	console.log('listing');


		var fs = require('fs');
		var files;
		fs.readdir( path, function (err, files) {
			if (!err) {
				console.log(files);
				 res.json(files);
			}
			else
				throw err;
		});


});


router.post('/api/GET/id', function(req, res){

	console.log(req.body);

	//Resolve step: Returns panel ids found by query
	promise.then(function(panels) {

		var panelIds = [];

		panels.forEach(function(panel) {
			panelIds.push(panel._id);
		});

		res.json(panelIds);
	}) //Catch step: catch any arror thrown by promise.
		.catch(function(err) {
			res.json({
				error: err.message
			});
		})
		.done(); //Clean up.
});

router.post('/api/POST/pdf', function(req, res){

	console.log(req.body);

	/*var name = req.body.info.name;
	var pdf = req.body.info.file;

	var pdf = pdf.replace('data:application/pdf;base64,', '');

	res.send('received');
	fs.writeFile(name, pdf, 'base64', function(err) {
		console.log(err);
	});*/
});


module.exports = router;
