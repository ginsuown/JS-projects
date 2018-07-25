var request = require("request");

function myRequest(url) {
  let p = new Promise((resolve, reject) => {
    request(url, function(error, response, body) {
      if (!error) {
        resolve(body);
      } else {
        reject(error);
      }
    });
  });
  return p;
}

let req = myRequest("https://www.google.com");

req.then(response => {
  console.log(response);
});
req.catch(error => {
  console.log(error);
});
