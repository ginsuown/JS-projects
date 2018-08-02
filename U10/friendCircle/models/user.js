const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    id: Number,
    name: String,
    gender: String,
    location: String,
    bio: String
  },
  { collection: "user" }
);

module.exports = mongoose.model("user", UserSchema);
