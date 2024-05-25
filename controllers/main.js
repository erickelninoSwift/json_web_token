const login = async (request, response) => {
  return response.send("Fake login/Register/Sign up Rute");
};

const dashboard = async (request, response) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  return response.status(200).json({
    message: `Hello . Eriik Elnino`,
    secret: `Here is your Authorized data , lucky number ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
