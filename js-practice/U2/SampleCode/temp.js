let arr = [];
arr[0] = 10; // function (x,y) { return x + y; };
arr[1] = function (x,y) { return x - y; };
arr[2] = function (x,y) { return x * y; };
arr[3] = function (x,y) { return x / y; };

// Here's a function that takes one of the above functions
// as an argument and invokes it on two operands
function operate(operator, operand1, operand2) {
    return operator(operand1, operand2);
}

// We could invoke this function like this to compute the value (2+3) + (4*5):
var i = operate(arr[0], operate(arr[0], 2, 3), operate(arr[2], 4, 5));