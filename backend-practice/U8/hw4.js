const http = require("http");

const server = http.createServer((req, res) => {
  //console.log(`${req.method} ${req.url}`);
  //res.end('Hello world! You entered ' + `${req.url}`);
  if (req.method === "POST") {
    console.log(`${req.method} request at ${req.url}`);
    //POST request
    // console.log(req.url);
    let string = req.url.match(/(?<=\=).+$/);
    if (string) {
      res.writeHead(200);
      res.end(string[0].toUpperCase());
    } else {
      res.end("No input");
    }
  } else {
    console.log(`${req.method} is not supported`);
    res.end("Unsupported request");
  }
});

//const port = process.argv[2];
//server.listen(port, () => console.log(`Server started on port ${port}`));

server.listen(8080, () => console.log(`Server started on port 8080`));
