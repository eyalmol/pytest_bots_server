const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create bot1 schema and model
const bot1Schema = new Schema({
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
});

const Bot1 = mongoose.model("bot1", bot1Schema);
module.exports = Bot1;
