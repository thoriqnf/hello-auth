var express = require("express");
var router = express.Router();

var controller = require("./controller");

/* GET users listing. */
router.get("/", (req, res, next) {
  res.send({
    message: "test auth"
  });
});

router.post("/login", controller.checkBody, (req, res) => {
  res.send({
    username: req.body.username,
    token: req.token,
    message: req.message
  });
});

router.get("/check", controller.checkToken, (req, res) => {
  res.send({
    message: req.message
  });
});
module.exports = router;
