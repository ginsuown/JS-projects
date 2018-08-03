//"use strict"
//---------- var --------------
var a = 5;
function first() {
	var a = 6;
}

function second() {
	console.log('a = ' + a);
}

first();
second();
		
//---------- var --------------
var a1 = 6;
function test() {
	var a1 = 7;
	function again() {
		var a1 = 8;
		console.log('First Time a1 = ' + a1);  // First Time
	}
	again();
	console.log('Second Time a1 = ' + a1);  // Second Time
}
test();
		
console.log('Third Time a1 = ' + a1); // Third Time
		
//--------- var ---------------
function z() {
	i = 'string';
	console.log(i);
	var i = 1;
}
z();

//--------- var ---------------
function x() {
   var a2 = 2, b2 = c2 = 5;
   // var a2=3;
   // var b2 = 5;
   // c2 = 5;
   console.log(" " + a2 + " " +  b2 + " " +  c2);
};
x();
//console.log('a2 = ' + a2);
//console.log('b2 = ' + b2);
console.log('c2 = ' + c2);

//--------- var ---------------
function y() {
	for (var i=0; i<5; i++) {
		console.log('i = ' + i);
	}
	console.log('after for loop, i = ' + i);
}
y();