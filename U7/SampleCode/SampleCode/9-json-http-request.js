// This is the callback version of http client
var request = require('request');

request('https://www.w3schools.com/angular/customers.php', 
  function (error, response, body) {

    console.log('typeof body is ', typeof body); 

    let jbody = JSON.parse(body);

    console.log(typeof jbody);

    let jdata = jbody.records[0];
		console.log('jdata = ' + jdata.City);
  }
);
