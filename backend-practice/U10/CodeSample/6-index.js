const express = require('express');
const path = require('path');
const requestHandlers = require('./6-nonblocking');

const app = express();

app.use(express.static(path.join(__dirname, '/www')));

// A route for /start 
app.get('/start', (req, res) => {
	requestHandlers.start(req, res);
	//res.send('in start page');
});

// A route for /upload 
app.get('/upload', (req, res) => {
	requestHandlers.upload(req, res);
	//res.send('in upload page');
});


app.use((req, res) => {
	res.send("404");
	}
);
app.listen(8888, () => {
	console.log('Express App started');
});
