let vals = [], vals1 = [];
for	(var x = 0; x	< 4; x += 1)	{  
	vals.push(x);
}
console.log('x = ' + x);
console.log(vals);

for	(let x1 = 0; x1	< 4; x1 += 1)	{  
	vals1.push(x1);
}
console.log(vals1); // ReferenceError
console.log('after for loop, x1 = ' + x1);



