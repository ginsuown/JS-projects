// get first element of array
function getFirst(x) {
  return x.shift();
}

// implemented in Array.prototype
Array.prototype.getFirstElement = function() {
  if (this === undefined || this === []) {
    return undefined;
  } else {
    return this[0];
  }
};

// testing
let a = [1, 2, 3, 4];
console.log(getFirst(a));
console.log(a.getFirstElement());

// filter false, null, 0, blank values from array
function removeF(x) {
  return x.filter(a => ![false, null, 0, ""].includes(a));
}

// testing
let b = [1, false, 2, null, 3, 0, 4, "", "hi"];
console.log(b);
console.log(removeF(b));
