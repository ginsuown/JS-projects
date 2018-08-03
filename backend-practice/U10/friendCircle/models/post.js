const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    id: Number,
    content: String,
    created_at: { type: Date, default: Date.now },
    userId: Number
  },
  { collection: "post" }
);

module.exports = mongoose.model("post", PostSchema);
