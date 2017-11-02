const DATA_USERS = require("../api/users/data.json");
const TOKEN = "VALID_USER_TOKEN";

const checkBody = (req, res, next) => {
  const username = req.body.username;
  if (username) {
    DATA_USERS.map(user => {
      if (username === user.username) req.token = "TOKEN_DUMMY";
    });
  } else req.message = "USERNAME IS NOT PROVIDED";
  next();
};

const checkToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    if (token === TOKEN) {
      req.message = "SUCCESS";
      req.token = token;
    } else req.message = "TOKEN IS NOT MATCH";
  } else req.message = "AUTHORIZATION TOKEN IS NOT PROVIDED";
  next();
};

module.exports = { checkBody, checkToken };
