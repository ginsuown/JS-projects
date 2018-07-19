// Read Synchrously
var fs = require("fs");
console.log(process.cwd());
console.log("\n *START* \n");
var content = fs.readFileSync(__dirname + "\\coordinates.json");
console.log("Output Content : \n" + content);
console.log("\n *EXIT* \n");
