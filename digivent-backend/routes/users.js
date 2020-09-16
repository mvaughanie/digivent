  
const router = require("express").Router();
const User = require("../models/User.js");
const Event = require("../models/Event.js");

router.get("/", (req, res, next) => {
    Event.find({}) 
    .sort({ createdAt: "desc" })
    .then((results) => {
      return res.send(results + "Users");
    })
    .catch(next);
});

module.exports = router;