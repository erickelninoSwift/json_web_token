const jwt = require("jsonwebtoken");
require("dotenv").config();

const { BadrequestError } = require("../errors/index");

const login = async (request, response) => {
  const { username, password } = request.body;

  if (!username || !password) {
    throw new BadrequestError("Please provide email and password");
  }

  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });

  return response.status(200).json({
    msg: "user was created",
    token,
  });
};

const dashboard = async (request, response) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  return response.status(200).json({
    msg: `Hello . Eriik Elnino`,
    secret: `Here is your Authorized data , lucky number ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
