  
const router = require("express").Router();
const Admin = require("../models/Admin.js");
const Event = require("../models/Event.js");

router.get("/", (req, res, next) => {
    Event.find({}) 
    .sort({ createdAt: "desc" })
    .then((results) => {
      return res.send(results + "admins");
    })
    .catch(next);
});

module.exports = router;