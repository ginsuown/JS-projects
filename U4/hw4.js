//ES5 Singleton
function ES5ST() {
  if (ES5ST.prototype.ref === undefined) {
    ES5ST.prototype.ref = this;
  } else {
    return ES5ST.prototype.ref;
  }
}

//testing
let st1 = new ES5ST();
let st2 = new ES5ST();
console.log(st1 === st2);

//ES6 Singleton

// class ES6ST {
//   constructor() {
//     //
//     if (ES6ST.prototype.ref === undefined) {
//       ES6ST.prototype.ref = this;
//     } else {
//       return ES6ST.prototype.ref;
//     }
//   }
// }

// //testing
// let st3 = new ES6ST();
// let st4 = new ES6ST();
// console.log(st3 === st4);
