'use strict';
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
	// Send a plain text response
	res.send('Welcome to User Route!');
});

router.get('/newuser', (req, res) => {
	// Send a plain text response
	res.send('New User');
});

router.get('/DeleteUser', (req, res) => {
	res.render('Delete User');
});

module.exports = router;

