// // Question 1
// function printing() {
//   console.log(1);
//   setTimeout(function() {
//     console.log(2);
//   }, 1000);
//   setTimeout(function() {
//     console.log(3);
//   }, 0);
//   console.log(4);
// }
// printing();
// //1, 4, 3, 2

// //Question 2
// for (var i = 0; i < 4; i++) {
//   setTimeout(() => console.log(i), 0);
// }

//4, 4, 4, 4

//Question 3
// for (let i = 0; i < 4; i++) {
//   (function(i) {
//     setTimeout(() => console.log(i), 0);
//   })(i);
// }

// //0, 1, 2, 3

// //Quesion 4
// console.log("Before the timeout");
// setTimeout(function() {
//   console.log("In the timeout function");
// }, 0);
// console.log("After the timeout");

//Before, After, In

//Question 5
// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log("Index: " + i + ", element: " + arr[i]);
//   }, 3000);
// }

// "Index: 4, element: undefined" 4 times

function stopTimer(x) {
  //starts with x seconds
  let timer = setInterval(() => {
    if (x === 0) {
      clearInterval(timer);
    }
    console.log(x);
    x--;
  }, 1000);
}

stopTimer(3);
