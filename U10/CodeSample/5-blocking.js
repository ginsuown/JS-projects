
let start = (req, res) => {
	console.log("Request handler 'start' was called.");
	function sleep(milliSeconds) {
		var startTime = new Date().getTime();
		while (new Date().getTime() < startTime + milliSeconds);
	}
	sleep(10000);
	res.send('in start page');
	return;
}

let upload = (req, res) => {
	console.log("Request handler 'upload' was called.");
	res.send('in upload page');
	return;
}

let end = (req, res) => {
	console.log("Request handler 'end' was called.");
	res.send('in end page');
}

exports.start = start;
exports.upload = upload;
exports.end = end;