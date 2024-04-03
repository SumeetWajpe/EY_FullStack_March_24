const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  id: Number,
  title: String,
  price: Number,
});
module.exports = mongoose.model("users", usersSchema); // model("nameofcollectionindb",schema)
