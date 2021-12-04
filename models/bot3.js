const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create bot3 schema and model
const bot3Schema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is requaired"],
  },
  id: {
    type: Number,
    required: [true, "ID field is requaired"],
  },
  intent: {
    type: Array,
    default: [],
  },
  permissionList: {
    type: Array,
  },
  username: {
    type: String,
    required: [true, "must to provide username"],
  },
  password: {
    type: String,
    required: [true, "must to provide password"],
  },
  auth: {
    type: String,
    default: "30377",
  },
});

const Bot3 = mongoose.model("bot3", bot3Schema);
module.exports = Bot3;
