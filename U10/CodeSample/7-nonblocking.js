const exec = require("child_process").exec;

let start = (req, res) => {
	var date1 = new Date();
	console.log("Request handler 'start' was called. time = " + date1.getMilliseconds());
	exec("dir", function (error, stdout, stderr) {
		var date2 = new Date();
		console.log("inside callback starts. time = " + date2.getMilliseconds());
		res.send('in start page. stdout = ' + stdout);
	});
	
	date1 = new Date();
	console.log("Request handler 'start' is complete. time = " + date1.getMilliseconds());
}

let upload = (req, res) => {
	console.log("Request handler 'upload' was called.");
	res.send('in upload page');
}

exports.start = start;
exports.upload = upload;