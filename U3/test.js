const isInt = num => {
  return parseInt(num) === num;
};

const isInteger = x => {
  return typeof x === "number" && x % 1 === 0;
};

//can also use Math.floor()

console.log(isInteger(4));

console.log(isInt(5));

function sum(x, y) {
  if (y === undefined) {
    return function(y) {
      return x + y;
    };
  } else {
    return x + y;
  }
}
console.log(sum(2, 3));
console.log(sum(2)(3));

function sum1(x) {
  return function(y) {
    return x + y;
  };
}
//console.log(sum1(2)(3));

console.log(
  (function f(n) {
    return n > 1 ? n * f(n - 1) : n;
  })(10)
);
//factorial function

(function(x) {
  return (function(y) {
    console.log(x);
  })(2);
})(1);
//console log 1

let a = 6;
console.log(Array.isArray(a));
console.log(["abc"]);
