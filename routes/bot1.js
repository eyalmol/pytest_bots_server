const express = require("express");
const router = express.Router();
const Bot1 = require("../models/bot1");
//setting the 4 crud operations for bod1(get,post,update,delete)
//get
//We would get the bot1 in our database and would send them all as a response
router.get("", function (req, res, next) {
  Bot1.find({})
    .then(function (bot1) {
      res.send(bot1);
    })
    .catch(next);
});
//post for bot1
//We create a new bot1 in the database and then return the created bot as a response
router.post("", function (req, res, next) {
  Bot1.create(req.body)
    .then(function (bot1) {
      res.send(bot1);
      res.status(200);
    })
    .catch(next);
});
//put for bot1
//find the same bot with the help of its Id and return the updated bot as a response.
router.put("/:id", function (req, res, next) {
  Bot1.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(function (bot1) {
      res.send(bot1);
    })
    .catch(next);
});
//delete for bot1
router.delete("/:id", function (req, res, next) {
  Bot1.findOneAndDelete({ _id: req.params.id })
    .then(function (bot1) {
      res.send(bot1);
    })
    .catch(next);
});
//get
//it will check if the bot1 has an intent of making a sound, and the permission to do so
//if it has will return a sound in respond
router.get("/:id/:intent", function (req, res, next) {
  Bot1.findOne({ _id: req.params.id })
    .then(function (bot1) {
      if (
        bot1.intent.includes(req.params.intent) &&
        bot1.permissionList.includes(`${req.params.intent}_permission`)
      ) {
        res.send(`${req.params.intent} 😉🔊`);
        res.status(200);
      } else {
        res.send("False");
      }
    })
    .catch(next);
});
//export module
module.exports = router;
