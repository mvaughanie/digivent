const router = require("express").Router();

const Event = require("../models/Event");


router.get("/", (req, res, next) => {
    Event.find({}) 
    .sort({ createdAt: "desc" })
    .then((results) => {
      return res.send(results + "Events");
    })
    .catch(next);
});


module.exports = router;