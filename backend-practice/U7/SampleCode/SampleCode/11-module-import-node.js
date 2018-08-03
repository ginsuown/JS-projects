let myMath = require('./11-module-export-node');

let math = new myMath();

console.log(math.findSum(1, 2)); //3
console.log(math.findSub(1, 2)); //-1