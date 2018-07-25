function asyncDouble(n) {
	return new Promise((resolve, reject) => {
		if (typeof n === 'number') {
			resolve(n * 2);
		} else {
			reject(n + ' is not a number');
		}
		// in real usage, some asynchronous
		// operation would happen above
	});
}

asyncDouble(3).then(
	data => console.log('data =', data), // 6
    err => console.log('error:', err));
    
let p = asyncDouble('a');
console.log('type of p is ' + typeof p);
p.then(
    data => console.log('data =', data))
 .catch(
    err => console.log('error:', err)); // error
