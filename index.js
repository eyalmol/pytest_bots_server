const express = require("express");
const mongoose = require("mongoose");
//set up our express app
const app = express();
//connect to mongoDB
mongoose.connect("mongodb://localhost:27017");
mongoose.Promise = global.Promise;
//add support to serve static files
app.use(express.static("public"));
//parse the data to json file
app.use(express.json());
//set the app to use the bot1,bot2,bot3 files(will hold our operations)
app.use("/api/bot1", require("./routes/bot1"));
app.use("/api/bot2", require("./routes/bot2"));
app.use("/api/bot3", require("./routes/bot3"));
//handle the errors that occurred during the operations
app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message });
});
//listen for request
app.listen(process.env.port || 4200, function () {
  console.log("Ready to Go!");
});
