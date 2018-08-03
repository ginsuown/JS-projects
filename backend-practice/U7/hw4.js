// Given a sorted integer array, return the missing ranges
function missingRanges(inputs, lower, upper) {
  let results = [];
  //check lower bounds
  if (inputs[0] - lower > 1) {
    results.push(lower.toString() + "->" + (inputs[i] - 1).toString());
  } else if (inputs[0] === lower + 1) {
    results.push(lower.toString());
  }
  //check middle
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i + 1] - inputs[i] === 2) {
      results.push((inputs[i] + 1).toString());
    } else if (inputs[i + 1] - inputs[i] > 2) {
      results.push(
        (inputs[i] + 1).toString() + "->" + (inputs[i + 1] - 1).toString()
      );
    }
  }
  //check upper bounds
  if (upper - inputs[inputs.length - 1] > 1) {
    results.push(
      (inputs[inputs.length - 1] + 1).toString() + "->" + upper.toString()
    );
  } else if (inputs[inputs.length - 1] === upper - 1) {
    results.push(upper.toString());
  }
  return results;
}

//test
let input = [0, 1, 3, 50, 75];
console.log(missingRanges(input, 0, 99));
