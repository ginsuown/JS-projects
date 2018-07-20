//load data from coordinates.json
let fs = require("fs");
let path = require("path");
let content = fs.readFileSync(path.join(__dirname, "coordinates.json"));
let data = JSON.parse(content);
console.log(`${data.length} point(s) loaded from coordinates.json`);

function processCoordinates(input, data) {
  data.forEach(element => {
    point = element.value.split(",");
    element.distance = Math.sqrt(
      Math.pow(input[0] - point[0], 2) + Math.pow(input[1] - point[1], 2)
    );
  });
  data.sort((a, b) => {
    return a.distance - b.distance;
  });
  //output result
  data.forEach(a => {
    console.log(`{ id: '${a.id}', value: '${a.value}'`);
  });
}

function checkInput(line) {
  let input = line.split(",");
  if (input.length !== 2) {
    console.log(`2 arguments required, ${input.length} were entered.`);
    return false;
  }
  for (let i of input) {
    if (Number.parseInt(i) != i) {
      console.log(`Arguments must be integers.`);
      return false;
    }
  }
  return input;
}

function prompt() {
  let readline = require("readline");
  let rl = readline.createInterface(process.stdin, process.stdout);
  rl.setPrompt("Please specify origin point x(0-100), y(0-100)> ");
  rl.prompt();
  rl.on("line", function(line) {
    let input = checkInput(line);
    if (input) {
      processCoordinates(input, data);
      rl.close();
    }
    rl.prompt();
  }).on("close", function() {
    // process coordinates
    process.exit(0);
  });
}

prompt();
