// Reverse words in a string

function rWords(input) {
  return input
    .split(" ")
    .reverse()
    .join(" ");
}
// cannot do it in-place because strings are immutable

let a = "hi my name is bob";
console.log(rWords(a));
