function calcFreq(input) {
  function buildObject(val, key, map) {
    //build object
    if (output[val] === undefined) {
      output[val] = [key];
    } else {
      output[val].push(key);
    }
  }
  tokens = input.split(" ");
  results = new Map();
  for (let i = 0; i < tokens.length; i++) {
    if (!results.has(tokens[i])) {
      results.set(tokens[i], 1);
    } else {
      results.set(tokens[i], results.get(tokens[i]) + 1);
    }
  }
  let output = {};
  results.forEach(buildObject);
  console.log(JSON.stringify(output, " ", 1));
}

let input = "abc dev jsf jsf jsf dev ab sefsa";
calcFreq(input);
