const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create bot2 schema and model
const bot2Schema = new Schema({
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
  },
  welcomeMsg: {
    type: String,
    default: "welcome👋",
  },
});

const Bot2 = mongoose.model("bot2", bot2Schema);
module.exports = Bot2;
