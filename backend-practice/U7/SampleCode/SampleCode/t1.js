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