// Given an array of strings and two input strings, find the distance between these two strings in the array

function findDist(array, str1, str2) {
  let found1 = [];
  let found2 = [];
  array.forEach((a, index) => {
    if (a === str1) {
      found1.push(index);
    } else if (a === str2) {
      found2.push(index);
    }
  });
  let i1 = 0;
  let i2 = 0;
  let min = array.length;
  while (i1 < found1.length && i2 < found2.length) {
    let diff = Math.abs(found1[i1] - found2[i2]);
    if (diff < min) {
      min = diff;
    }
    found1[i1] < found2[i2] ? i1++ : i2++;
  }
  return min;
}
let words = ["practice", "makes", "perfect", "coding", "makes", "hi"];

// testing
console.log(findDist(words, "coding", "practice"));
console.log(findDist(words, "coding", "makes"));
console.log(findDist(words, "practice", "makes"));
console.log(findDist(words, "hi", "practice"));
