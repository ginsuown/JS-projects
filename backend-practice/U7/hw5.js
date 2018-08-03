// Given two strings S, T, determine if they are both one edit distance apart.

function editDist(S, T) {
  let edit = 0;
  for (let i = 0; i < S.length; i++) {
    if (S[i] !== T[i]) {
      edit++;
    }
  }
  return edit <= 1 ? true : false;
}

let str1 = "email";
let str2 = "emali";

console.log(editDist(str1, str2));
