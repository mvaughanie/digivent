const router = require("express").Router();
const Question = require("../models/Question.js");

router.param("id", (req, res, next, id) => {
  Question.findById(id)
    .then((question) => {
      if (!question) {
        res.status(404).send("Question not found");
      } else {
        req.question = question;
        return next();
      }
    })
    .catch(next);
});

router.get("/", (req, res, next) => {
  Question.find({})
    .sort({ createdAt: "desc" })
    .then((results) => {
      return res.send(results);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  Question.findById(req.question.id)
    .populate("speaker user event")
    .then((question) => {
      return res.send(question);
    })
    .catch(next);
});

module.exports = router;
