const express = require("express");
const router = express.Router();
const Bot3 = require("../models/bot3");
//setting the 4 crud operations for bod3(get,post,update,delete)
//get
//We would get the bot3 in our database and would send them all as a response
router.get("", function (req, res, next) {
  Bot3.find({})
    .then(function (bot3) {
      res.send(bot3);
    })
    .catch(next);
});
//post for bot3
//We create a new bot3 in the database and then return the created bot as a response
router.post("", function (req, res, next) {
  Bot3.create(req.body)
    .then(function (bot3) {
      res.send(bot3);
    })
    .catch(next);
});
//put for bot3
//find the same bot with the help of its Id and return the updated bot as a response.
router.put("/:id", function (req, res, next) {
  Bot3.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(function (bot3) {
      res.send(bot3);
    })
    .catch(next);
});
//delete for bot3
router.delete("/:id", function (req, res, next) {
  Bot3.findOneAndDelete({ _id: req.params.id })
    .then(function (bot3) {
      res.send(bot3);
    })
    .catch(next);
});
//get
//it will check if the bot3 has an intent of making a sound, and the permission to do so
//if it has will return a sound in respond
router.get("/:id/:auth", function (req, res, next) {
  Bot3.findOne({ _id: req.params.id })
    .then(function (bot3) {
      if (
        req.params.auth === `${bot3.username + bot3.password}` ||
        req.params.auth === bot3.auth
      ) {
        res.send("make_api_call");
      }
    })
    .catch(next);
});
//export module
module.exports = router;
