const express = require("express");
const mongoose = require("mongoose");
const requestHandlers = require("./requestHandlers");

const app = express();
// create db connection
mongoose.connect("mongodb://localhost/friendCircle");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log("Connected to db");
});

//user routes
app.get("/users", requestHandlers.getUsers);
app.post("/users", requestHandlers.createUser);

//post routes

//like routes

app.listen(8888, () => {
  console.log("Server started on port 8888");
});
