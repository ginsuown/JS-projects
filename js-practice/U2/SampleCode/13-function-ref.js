function getGreeting() {
	return "Hello world!";
}
var a1 = getGreeting(); 			// "Hello, World!"
var a2 = getGreeting; 			    // function getGreeting()

console.log('type of getGreeting = ' + typeof getGreeting);
console.log('a1 = ' + a1);
console.log('type of a1 = ' + typeof a1);
console.log('a2 = ' + a2);
console.log('type of a2 = ' + typeof a2);

let f = getGreeting;
var a3 = f(); 				// "Hello, World!"
console.log('a3 = ' + a3);
console.log('type of f = ' + typeof f);

f = 'abc';
console.log('type of f = ' + typeof f);
a3 = f();


