let myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve('Success!');
    }, 1000);
});

let t1 = new Date();
console.log(t1.toString());

myFirstPromise.then((successMessage) => {
   let t = new Date();
   console.log('\nYay! ' + successMessage + ' at ' + t.toString());
});

let t2 = new Date();
console.log('\nthis is done before async, at ' + t2.toString());
