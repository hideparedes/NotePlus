const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {

  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({
      message: "Not authorized"
    });
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decode.user;
    next();
  } catch (error) {
    console.error(error.message);

    res.status(401).json({
      message: "Invalid token"
    });
  }
}