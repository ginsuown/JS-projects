const exec = require("child_process").exec;

let start = (req, res) => {
	console.log("Request handler 'start' was called.");
	var content = "empty content";

	exec("dir", function (error, stdout, stderr) {
		content = stdout;
		console.log(content);
	});
	res.send('in start page. content = ' + content);
	return;
}

let upload = (req, res) => {
	console.log("Request handler 'upload' was called.");
	res.send('in upload page');
	return;
}

exports.start = start;
exports.upload = upload;
