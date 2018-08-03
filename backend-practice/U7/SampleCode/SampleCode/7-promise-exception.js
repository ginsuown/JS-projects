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

let p = asyncDouble(3).then(
	v => {
		// This causes the promise returned by
		// the call to then above to be rejected.
		throw 'Did you see this?';
	},
	err => console.error('error:', err)); // not reached

p.then(
    value => console.log('resolved with', value),
    reason => console.log('rejected with', reason));
// Output is "rejected with Did you see this?"
