const http = require("http");

const server = http.createServer((req, res) => {
  //console.log(`${req.method} ${req.url}`);
  //res.end('Hello world! You entered ' + `${req.url}`);
  if (req.method === "GET") {
    console.log(`${req.method} request at ${req.url}`);
    //GET request
    res.end("Unsupported request");
  } else {
    console.log(`${req.method} is not supported`);
    res.end("Unsupported request");
  }
});

const port = process.argv[2];
server.listen(port, () => console.log(`Server started on port ${port}`));
