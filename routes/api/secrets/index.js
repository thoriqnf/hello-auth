var express = require("express");
var router = express.Router();
const authController = require("../../auth/controller");

const DATA = require("./data.json");

router.get("/", authController.checkToken, (req, res, next) => {
  if (req.token) {
    res.send(DATA);
  } else {
    res.send({
      message: "YOU ARE NOT AUTHENTICATED AND AUTHORIZED"
    });
  }
});

module.exports = router;
