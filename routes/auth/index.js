var express = require("express");
var router = express.Router();

var controller = require("./controller");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("test auth");
});

router.post("/login", controller.checkBody, (req, res) => {
  res.send({
    body: req.body.username || req.message
  });
});

router.get("/check", controller.checkToken, (req, res) => {
  res.send({
    token: req.headers.authorization || req.message
  });
});
module.exports = router;
