// function declaration
function avg(a, b) {
    return (a + b)/2;
}

var a1 = avg(1,2);
console.log('a1 = ' + a1);

// function expression
const avg1 = function (a, b) {
    return (a + b)/2;
}

var a2 = avg1(1,3);
console.log('a2 = ' + a2);

// function without return statement
var avg2  = function (a, b) {
    console.log( (a + b)/2);
}
console.log('avg2 return = ' + avg2(1, 4));

// function hoisting
hoisted();		// logs ‘foo’

function hoisted() {
	console.log('foo');
};

console.log(notHoisted);


notHoisted(); 		// TypeError: notHoisted is not a function

var notHoisted = function() {
	console.log('bar');
};


