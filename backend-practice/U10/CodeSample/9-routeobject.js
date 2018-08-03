'use strict';
const express = require('express');
const path = require('path');

const userRoute = require('./9-routeobject-userroute');
const classRoute = require('./9-routeobject-classroute');

const app = express();

app.use(express.static(path.join(__dirname, '/www')));

app.use('/users', userRoute);
app.use('/classes', classRoute);

app.listen(8888, () => {
	console.log('Express App started');
});