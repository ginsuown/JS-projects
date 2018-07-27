// Use node modules to output contents of directory that end with the given file extension

var fs = require("fs");
let dir = process.argv[2];
let ext = process.argv[3];

fs.readdir(dir, function(err, files) {
  if (err) {
    console.error("Invalid directory");
  } else {
    console.log(`Contents of ${dir} with file extension .${ext}:`);
    console.log(
      files
        .filter(f => {
          let tokens = f.split(".");
          return tokens[tokens.length - 1] === ext && tokens.length > 1;
        })
        .join("\n")
    );
  }
});
