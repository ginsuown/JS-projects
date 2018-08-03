// initialize mysql
const mysql = require("mysql");
console.log("Connecting to db...");
// create db connection
var connection = mysql.createConnection({
  host: "localhost",
  user: "test",
  password: "testtest",
  database: "test"
});
connection.connect();
console.log("Connected to db!");

// create server
const http = require("http");
const formBody = require("body/form");

const server = http.createServer((req, res) => {
  console.log(`${req.method} request at ${req.url}`);
  if (req.method === "GET") {
    let index = req.url.match(/^\/app\/users\/getone\/(\d)+/);
    //get all users
    if (req.url === "/app/users/getall") {
      let strQuery = "SELECT * FROM Users;";
      connection.query(strQuery, (err, rows, fields) => {
        if (err) {
          throw err;
        } else {
          res.end(JSON.stringify(rows, null, 2));
        }
      });
    } else if (index) {
      //get one user by index
      let strQuery = `SELECT * FROM Users WHERE Id=${index[1]}`;
      connection.query(strQuery, (err, rows, fields) => {
        if (err) {
          throw err;
        } else {
          res.end(JSON.stringify(rows));
        }
      });
    } else {
      res.end("Unsupported request");
    }

    //GET request
  } else if (req.method === "POST") {
    switch (req.url) {
      case "/app/users/insertone":
        formBody(req, (err, body) => {
          if (body.name && body.age && body.sex && body.title) {
            let strQuery = `INSERT INTO users (Name,Age,Sex,Title) VALUES ('${
              body.name
            }','${body.age}','${body.sex}','${body.title}');`;
            connection.query(strQuery, err => {
              if (err) {
                throw err;
              } else {
                console.log("New record created in db");
                res.end("Successful input");
              }
            });
          } else {
            res.end("missing parameters");
          }
        });
        break;
      default:
        res.end("Unsupported request");
    }
  } else if (req.method === "DELETE") {
    console.log(req.url);
    let delIndex = req.url.match(/^\/app\/users\/deleteone\/(\d)+/);
    console.log(delIndex);
    //delete a user by index
    if (delIndex) {
      //get one user by index
      let strQuery = `DELETE FROM Users WHERE Id=${delIndex[1]}`;
      connection.query(strQuery, err => {
        if (err) {
          throw err;
        } else {
          res.end("Successfully deleted entry");
        }
      });
    } else {
      res.end("Unsupported request");
    }
  } else {
    console.log(`${req.method} is not supported`);
    res.end("Unsupported request");
  }
});

const port = 8080;
server.listen(port, () => console.log(`Server started on port ${port}`));
