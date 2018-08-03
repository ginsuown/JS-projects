// hoisting works with var / functional scoping only
console.log(x); // undefined
var x = 3;
console.log('x = ' + x); // 3

/* Because of hoisting, this is the same as
    var x;
    console.log(x);
    x = 3;
    console.log(x);
*/

/* use strict */
{
    'use strict';
    x2; // undefined
    console.log('x2 = ' + x2); // 3
}

/*
// hoisting doesn't work with let / block scoping
x1; // ReferenceError: x is not defined
let x1 = 3; // we'll never get here -- the error stops execution
console.log('x1 = ' + x1); // 3
*/


