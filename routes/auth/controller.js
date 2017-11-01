const checkBody = (req, res, next) => {
  if (req.body.username) console.log("username:", req.body.username);
  else req.message = "USERNAME IS NOT PROVIDED";
  next();
};

const checkToken = (req, res, next) => {
  if (req.headers.username) console.log("token:", req.headers.authorization);
  else req.message = "AUTHORIZATION TOKEN IS NOT PROVIDED";
  next();
};

module.exports = { checkBody, checkToken };
