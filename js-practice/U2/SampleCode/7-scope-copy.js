// Shallow Copy: Simply makes a copy of the reference to A into B. Think about it as a copy 
// of A's Address. So, the addresses of A and B will be the same i.e. they will be pointing 
// to the same memory location i.e. data contents.

// Deep copy: Simply makes a copy of all the members of A, allocates memory in a different 
// location for B and then assigns the copied members to B to achieve deep copy. In this 
// way, if A becomes non-existant B is still valid in the memory. The correct term to use 
// would be cloning, where you know that they both are totally the same, but yet different 
// (i.e. stored as two different entities in the memory space).
		
// number
var i, j;
i = 1; j = i; i = 2;
console.log('i = ' + i + ' and j = ' + j);
		
// string
var s1, s2;
s1 = 'unchanged string'; s2 = s1; s1 = 'changed string';
console.log('s1 = ' + s1 + ' and s2 = ' + s2);
		
// boolean
var b1, b2;
b1 = true; b2 = b1; b1 = false;
console.log('b1 = ' + b1 + ' and b2 = ' + b2);
		
// array
var a1, a2;
a1 = [1,2,3]; a2 = a1; a1.push(4); a1.push(5);
console.log('a1 = ' + a1 + ' and a2 = ' + a2);
		
// object
var o1, o2;
o1 = {name:'unchanged name', age:5}; o2 = o1; o1.name = 'changed name';
console.log('o1.name = ' + o1.name + ' and o2.name = ' + o2.name);

// object
var o3, o4;
o3 = {name:'unchanged name', age:5}; o4 = o3; 
o3 = {name:'changed name', age:6}; 
console.log('o3.name = ' + o3.name + ' and o4.name = ' + o4.name);

// function
var f1, f2;
f1 = function () {
	console.log('in original function');
};
f1();
f2 = f1;
f2();
		
f1 = function () {
		console.log('in changed function');
};
f2();
f1();  