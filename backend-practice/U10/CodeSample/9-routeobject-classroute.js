'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	// Send a plain text response
	res.send('Welcome to Class Route!');
});

router.get('/newclass', (req, res) => {
	// Send a plain text response
	res.send('New Class');
});

router.get('/deleteclass', (req, res) => {
	res.render('delete Class');
});

module.exports = router;

