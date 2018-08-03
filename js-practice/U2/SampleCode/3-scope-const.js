const a = 5;
// a = 4; // can't change value because it's immutable

const o = {name: 'john', age: 20};
console.log(o);

o.age = 25; // ok
console.log(o);

o = {name: 'john1', age: 22}; // Error: Assignment on CONST 

Object.freeze(o);  
o.age = 10; // TypeError
console.log(o);