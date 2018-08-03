var axios = require('axios');
var data = 'start';
axios.get('https://www.w3schools.com/angular/customers.php')
	.then(function(response){
		data = response.data
		console.log(data); // ex.: { user: 'Your User'}
    	console.log(response.status); // ex.: 200
	});
	
console.log(data);