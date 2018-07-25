// Question 1
// Write a program to list the properties of an object

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
  sayName: function() {
    console.log(this.name);
    return;
  }
};

function listProps(obj) {
  for (let i of Object.keys(obj)) {
    console.log(i);
  }
}

listProps(student);

// Question 2
// Write a program to get the length (# of properties) of an object

function getLength(obj) {
  return Object.entries(obj).length;
}

console.log(getLength(student));

// Question 3
// Write a program to print all the methods of an object
function getMethods(obj) {
  for (let i of Object.getOwnPropertyNames(obj)) {
    if (typeof obj[i] === "function") {
      console.log(i);
    }
  }
}

getMethods(student);

// Question 4
// Write a program to parse any given URL into meaningful pieces
function parseURL(url) {
  let temp = new URL(url);
  return { host: temp.hostname, path: temp.pathname };
}

console.log(parseURL("https://www.google.com"));

// Question 5
// Write a function to retrieve all of an object's own and inherited properties
function getAllProps(obj) {
  for (let i in obj) {
    console.log(i);
  }
}

getAllProps(student);
