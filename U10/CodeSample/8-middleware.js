
const express = require('express');
const path = require('path');

const app = express();

// define a function for middleware
const forbidder = (forbidden_day) => {
	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	return (req, res, next) => {
		// get the current day
		var day = new Date().getDay();

		// check if the current day is the forbidden day
		if (days[day] === forbidden_day) {
			res.send('No visitors are allowed on ' + forbidden_day + 's!');
		}
		// call the next middleware
		else {
			next();
		}
	}
};

// use the forbidder middleware
app.use(forbidder('Sunday'));

app.use(express.static(path.join(__dirname, '/www')));

// A route for /start 
app.get('/start', (req, res, next) => {
	res.send('in start page');
	console.log('in start');
	//next();
});

app.get('/start', (req, res, next) => {
	res.send('in 2nd start page');
	console.log("in 2nd start");
});


// A route for /upload 
app.get('/upload', (req, res, next) => {
	res.send('in upload page');
});

var testfunc = (req, res) => {
	res.send('this is a test page');
}

app.get('/test', testfunc);

app.use((req, res, next) => {
	res.send("404");
	console.log("my 404");
	//next();
	}
);

app.listen(8888, () => {
	console.log('Express App started');
});