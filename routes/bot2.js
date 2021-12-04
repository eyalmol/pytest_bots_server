const express = require("express");
const router = express.Router();
const Bot2 = require("../models/bot2");
//setting the 4 crud operations for bod2(get,post,update,delete)
//get
//We would get the bot2 in our database and would send them all as a response
router.get("", function (req, res, next) {
  Bot2.find({})
    .then(function (bot2) {
      res.send(bot2);
    })
    .catch(next);
});
//post for bot2
//We create a new bot2 in the database and then return the created bot as a response
router.post("", function (req, res, next) {
  Bot2.create(req.body)
    .then(function (bot2) {
      res.send(bot2);
    })
    .catch(next);
});
//put for bot2
//find the same bot with the help of its Id and return the updated bot as a response.
router.put("/:id", function (req, res, next) {
  Bot2.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(function (bot2) {
      res.send(bot2);
    })
    .catch(next);
});
//delete for bot2
router.delete("/:id", function (req, res, next) {
  Bot2.findOneAndDelete({ _id: req.params.id })
    .then(function (bot2) {
      res.send(bot2);
    })
    .catch(next);
});
//get
//We would get the bot2 in our database and would send them all as a response
router.put("/:id", function (req, res, next) {
  Bot2.findOne({ _id: req.params.id })
    .then(function (bot2) {
      if (
        bot2.intent.includes(req.body.get("intent")) &&
        req.body.get("welcomeMsg")
      ) {
        bot2.welcomeMsg = req.body.get("welcomeMsg");
        bot2.save();
        // res.send(bot2.welcomeMsg);
      } else if (
        !bot2.intent.includes(req.body.get("intent")) &&
        req.body.get("welcomeMsg")
      ) {
        bot2.intent.push(req.body.get("intent"));
        bot2.welcomeMsg = req.body.get("welcomeMsg");
        bot2.save();
      } else if (
        !bot2.intent.includes(req.params.intent) &&
        !req.params.welcomeMsg
      ) {
        bot2.intent.push(req.body.get("intent"));
        bot2.save();
      }
      res.send(bot2.welcomeMsg);
    })
    .catch(next);
});
//export module
module.exports = router;
