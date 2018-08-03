function count(num, steps = 0) {
  // call function with steps = 0
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return steps;
  } else if (num % 2) {
    return count(num * 3 + 1, steps + 1);
  } else {
    return count(num / 2, steps + 1);
  }
}

//let x = 377;
//console.log(count(x, 0) + " steps for the number %s", x);
for (let y = 0; y < 100; y++) {
  console.log(count(y) + " steps for the number %s", y);
}
