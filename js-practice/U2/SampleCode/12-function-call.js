// calling functions
const o = {
	name: 'Wallace', 			            // primitive property
	bark: function() { return 'Woof!'; }, 	// function property (method)
}

const o1 = {
	name: 'Wallace', 			            // primitive property
	bark() { return 'Woof!'; }, 			// function property (method)
}

var s1 = o.bark();

var s2 = o1.bark;

console.log(s2());

var calculator = { 
	operand1: 1,
	operand2: 1,
	add: function() {
		this.result= this.operand1 + this.operand2;
	}
};

calculator.add(); 		// A method invocation to compute 1+1.
console.log(calculator.result)		// => 2

