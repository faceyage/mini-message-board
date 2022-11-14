var express = require("express");
var router = express.Router();

const moment = require("moment");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: moment().startOf("minute").fromNow(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: moment().startOf("minute").fromNow(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

/* Add new message. */
router.post("/new", function (req, res, next) {
  //TODO
  const { name, message } = req.body;
  messages.push({
    text: message,
    user: name,
    added: moment().startOf("minute").fromNow(),
  });
  console.log(`Added new Message. User: ${name} Message: ${message}`);
  res.redirect("/");
});

module.exports = router;
