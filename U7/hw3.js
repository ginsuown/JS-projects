// given an array of time intervals consisting of start/end times, find out if a person
// could attend all meetings

function attendAll(inputs) {
  let sorted = inputs.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < sorted.length; i++) {
    if (i === sorted.length - 1) {
      return true;
    }
    if (sorted[i][1] > sorted[i + 1][0]) {
      return false;
    }
  }
}

let schedule1 = [
  [1, 5],
  [3, 7],
  [26, 40],
  [15, 25],
  [40, 52],
  [60, 80],
  [8, 13],
  [100, 110]
];
let schedule2 = [
  [1, 5],
  [5, 7],
  [26, 40],
  [15, 25],
  [40, 52],
  [60, 80],
  [8, 13],
  [100, 110]
];
console.log(attendAll(schedule1));
console.log(attendAll(schedule2));
