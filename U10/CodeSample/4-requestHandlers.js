
let start = (req, res) => {
	console.log("Request handler 'start' was called.");
	res.send('in start page');
}

let upload = (req, res) => {
	console.log("Request handler 'upload' was called.");
	res.send('in upload page');
}

let end = (req, res) => {
	console.log("Request handler 'end' was called.");
	res.send('in end page');
}

exports.start = start;
exports.upload = upload;
exports.end = end;