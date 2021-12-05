const express = require("express");
const router = express.Router();
const Bot2 = require("../models/bot2");
//setting the 4 crud operations for bod2(get,post,update,delete)
//get
//We would get all the bot2 in our database and would send them all as a response
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
//this get will check if the intent supplied is default_welcome_message and if so
//generate the new welcome msg that the user provided
router.get("/:id/:intent/:wlcm_msg", function (req, res, next) {
  Bot2.findOne({ _id: req.params.id })
    .then(function (bot2) {
      if (
        // bot2.intent.includes(req.body.get("intent")) &&
        req.params.intent === "default_welcome_message" &&
        req.params.wlcm_msg
      )
        res.send(req.params.wlcm_msg);
      // res.send(bot2.welcomeMsg);
      else if (req.params.intent != "default_welcome_message")
        res.send("False intent");
    })
    .catch(next);
});
//this get will check if the intent supplied is default_welcome_message and if so
//generate the default welcome msg
router.get("/:id/:intent", function (req, res, next) {
  Bot2.findOne({ _id: req.params.id })
    .then(function (bot2) {
      if (req.params.intent === "default_welcome_message")
        res.send(bot2.welcomeMsg);
      // res.send(bot2.welcomeMsg);
      else if (req.params.intent != "default_welcome_message")
        res.send("False intent");
    })
    .catch(next);
});
//export module
module.exports = router;
