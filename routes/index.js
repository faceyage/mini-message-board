var express = require("express");
var router = express.Router();

const moment = require("moment");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages, moment: moment });
});

/* Add new message. */
router.post("/new", function (req, res, next) {
  //TODO
  const { name, message } = req.body;
  messages.push({
    text: message,
    user: name,
    added: new Date(),
  });
  console.log(`Added new Message. User: ${name} Message: ${message}`);
  res.redirect("/");
});

module.exports = router;
