var express = require("express");
var router = express.Router();

//get request
router.get("/", function (req, res, next) {
  res.render("new", { title: "Mini Messageboard" });
});

module.exports = router;
