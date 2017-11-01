var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("test auth");
});

router.post("/", (req, res, next) => {
  console.log(req.headers);
  console.log(req.body);
  res.send({
    body: req.body,
    headers: req.headers
  });
});

module.exports = router;
