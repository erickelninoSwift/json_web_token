const { UnauthenticatedError } = require("../errors/index");
const jwt = require("jsonwebtoken");

const authenticationMiddleware = async (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthenticatedError("No token provided");
  }
  const token = authHeader.split(" ")[1];
  try {
    const verifytoken = jwt.verify(token, process.env.JWT_SECRET);
    if (verifytoken) {
      request.userEmail = verifytoken.email;
      next();
    }
  } catch (error) {
    throw new UnauthenticatedError("Token expired");
  }
};

module.exports = authenticationMiddleware;
