const Post = require("./models/post");
const Like = require("./models/like");
const User = require("./models/user");

//users
function getUsers(req, res) {
  User.find((err, users) => {
    if (err) {
      console.log("Error getting users");
      res.end("Error getting users");
    } else {
      res.status(200);
      res.json(JSON.stringify(users));
    }
  });
}

function createUser(req, res) {
  let user = new User();
  console.log(req.body);
}

//likes

//posts

module.exports = { getUsers, createUser };
