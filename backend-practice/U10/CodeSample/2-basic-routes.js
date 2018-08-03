
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/www')));

// A route for /start 
app.get('/start.html', (req, res) => {
					res.send('this is start page');
					console.log("in start page");
					}
);

// A route for /upload 
app.get('/upload.html', (req, res) => {
	res.send('this is upload page');
});

// A route for /test.htm
var testfunc = (req, res) => {
	res.send('this is a test page');
}
app.get('/test', testfunc);

// what happens if this is removed?
app.use((req, res) => {
	res.send("this is my 404");
	console.log("this is 404");
	}
);

app.listen(8888, () => {
	console.log('Express App started');
});