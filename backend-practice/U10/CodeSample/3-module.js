const express = require('express');

function start() {
	var app = express();
	
	function onRequest(request, response) {
		console.log("Request received.");
		response.send('<h1>Hello World from inside a module</h1>')
	}
	
	app.use(onRequest);
	
	app.listen(8888);
	
	console.log("Server has started. Now inside a module.");
}

exports.start_server = start;