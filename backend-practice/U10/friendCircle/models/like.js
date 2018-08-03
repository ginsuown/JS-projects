const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LikeSchema = new Schema(
  {
    id: Number,
    userId: Number,
    postId: Number
  },
  { collection: "like" }
);

module.exports = mongoose.model("like", LikeSchema);
