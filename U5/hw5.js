// question 1: Implement sqrt function
function sqrt(x) {
  // compute square root of x
  if ([0, 1].includes(x)) {
    return x;
  }
  let start = 1;
  let end = Math.floor(x / 2);
  let result = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (mid * mid === x) {
      return mid;
    }
    if (mid * mid < x) {
      start = mid + 1;
      result = mid;
    } else {
      end = mid - 1;
    }
  }
  return result;
}
//testing
console.log(sqrt(1));
console.log(sqrt(2));
console.log(sqrt(3));
console.log(sqrt(4));
console.log(sqrt(7));
console.log(sqrt(8));
console.log(sqrt(9));
console.log(sqrt(256));

// question 2: given a binary array, find maximum number of consecutive 1's.
function findCons(array) {
  let result = 0;
  let stack = [];
  array.forEach(element => {
    //if element is a 1
    if (element === 1) {
      stack.push(element);
    }
    //if element is a 0
    else {
      //check if current stack size is biggest
      if (stack.length > result) {
        result = stack.length;
        stack.length = 0;
      }
    }
  });
  //return
  return result > stack.length ? result : stack.length;
}
//testing
let arr1 = [1, 1, 1, 0, 0, 1, 1, 1, 1, 0];
console.log(findCons(arr1));
let arr2 = [1, 1, 1, 0, 0, 1, 1, 1, 1];
console.log(findCons(arr2));
let arr3 = [1];
console.log(findCons(arr3));
let arr4 = [0, 0, 0, 0];
console.log(findCons(arr4));
let arr5 = [1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1];
console.log(findCons(arr5));

// question 3: find the longest common prefix among strings in an array
function findLongestPrefix(array) {
  let prefix = undefined;
  //iterate through input array
  array.forEach(item => {
    //
    if (prefix === undefined) {
      prefix = item;
    } else {
      //find shared prefix with newest word and store in temp
      let temp = "";
      for (let i = 0; i < item.length; i++) {
        if (item[i] === prefix[i]) {
          temp = temp + item[i];
        } else break;
      }
      //update prefix
      prefix = temp;
      if (prefix === "") {
        return prefix;
      }
    }
  });
  return prefix;
}

let arr6 = ["hippie", "hi", "hippo", "himalayas", "high-powered"];
console.log(findLongestPrefix(arr6));
let arr7 = ["John", "Johnny", "Johnathan"];
console.log(findLongestPrefix(arr7));

// question 4: fizz buzz function
// output numbers for strings, but multiples of 3 should output Fizz
// multiples of 5 should output Buzz
// multiples of 3 and 5 should output FizzBuzz

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let output = "";
    let word = false;
    //check for fizz
    if (i / 3 === Math.floor(i / 3)) {
      word = true;
      output = "Fizz";
    }
    if (i / 5 === Math.floor(i / 5)) {
      word = true;
      output = output + "Buzz";
    }
    if (!word) {
      output = i;
    }
    console.log(output);
  }
}

fizzBuzz(15);
