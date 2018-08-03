var axios = require('axios');
	
// direct call with .then
let p = axios.get('https://www.w3schools.com/angular/customers.php');
p.then(
	/* success */
	function(response) {
		console.log('type of response is ' + typeof response);

		let jdata = response.data.records[0];
		console.log('jdata = ' + jdata.City);
	},
	/* failure */
	function(error) {
		r_data = error;
		console.log('error = ' + r_data);
	}
);