var axios = require('axios');

var data = 'start';
let r_data = 'start';
let r_data2 = 'start'; 
let r_data3 = 'start'; 
let r_data5 = 'start'; 
	
// direct call with .then
let p = axios.get('https://www.w3schools.com/angular/customers.php');
p.then(
	/* success */
	function(response) {
		r_data = response.data.records[0];
		console.log('r_data = ' + r_data.City);
	},
	/* failure */
	function(error) {
		r_data = error;
		console.log('error = ' + r_data);
	}
);

// --------------------------
// direct call with .sucess and .error
p = axios.get('https://www.w3schools.com/angular/customers.php')
		.then(
			/* success */
			function(response) {
				r_data1 = response.data.records[0];
				console.log('r_data1 = ' + r_data1.City);
			})
		.catch(
			/* failure */
			function(error) {
				r_data1 = error;
				console.log(r_data1);
			}
		);

// --------------------------
// inside a function
let fn1 = function () {
	axios.get('https://www.w3schools.com/angular/customers.php').then(
		/* success */
		function(response) {
			r_data2 = response.data.records[0];
			console.log('r_data2 = ' + r_data2.City);
			return r_data2;
		})
};
console.log('r_data2 = ' + fn1());

// --------------------------
// most common way - return the promise
let fn2 = function () {
	in2().then(
		/* success */
		function(response) {
			r_data3 = response.data.records[0];
			console.log('r_data3 = ' + r_data3.City);
		})
}

function in2 () {
	return axios.get('https://www.w3schools.com/angular/customers.php');
};

fn2();


// --------------------------
// return a promise of a promise
// overkill
let fn4 = function () {
	in4().then(
		/* success */
		function(response) {
			console.log("2");
			//console.log(response.data.records[0]);
			r_data5 = response;
			console.log('r_data5 = ' + r_data5);
		});
};

function in4 () {
return axios.get('https://www.w3schools.com/angular/customers.php').then(
		/* success */
		function(response) {
			console.log("1");
			//console.log(response.records[0]);
			r_data5 = response.data.records[0];
			console.log('r_data5 = ' + r_data5.City);
		})
};

fn4();




