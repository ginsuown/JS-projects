// get first element of array
function getFirst(x) {
  return x.shift();
}

// testing
let a = [1, 2, 3, 4];
console.log(getFirst(a));

// filter false, null, 0, blank values from array
function removeF(x) {
  return x.filter(a => ![false, null, 0, ""].includes(a));
}

// testing
let b = [1, false, 2, null, 3, 0, 4, "", "hi"];
console.log(b);
console.log(removeF(b));
