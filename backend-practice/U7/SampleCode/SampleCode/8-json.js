let text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ' +
    ']}';
console.log(text);

let obj = JSON.parse(text);  // typically, as an array of individual objects

console.log('object is ');
console.log(obj);

console.log("first employee's name is " + obj.employees[1].firstName + " " + obj.employees[1].lastName);

console.log("second employee's first name, before update, is " + obj.employees[0].firstName);
obj.employees[0].firstName = "Gilbert";
console.log("second employee's first name, after update, is " + obj.employees[0].firstName);

let jsonText = JSON.stringify(obj);
console.log(jsonText);

