const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const service = require("./message.service");
const hasOnlyValidProperties = require("../utils/hasOnlyValidProperties");
const hasRequiredProperties = require("../utils/hasRequiredProperties");
const validator = require("email-validator");
const PROPERTIES = ["name", "email", "message"];

async function createMessage(req, res, next) {
  try {
    const createdMessage = await service.create(req.body.data);
    res.status(200).json({ data: { createdMessage } });
  } catch (error) {
    return next({ status: 500, message: "Error creating message" });
  }
}

function isValidEmail(req, res, next) {
  const { email } = req.body.data;
  if (!validator.validate(email)) {
    return next({
      status: 400,
      message: `Email ${email} that has been provided is not a valid email.`,
    });
  }
  return next();
}

module.exports = {
  createMessage: [
    hasOnlyValidProperties(PROPERTIES),
    hasRequiredProperties(PROPERTIES),
    isValidEmail,
    asyncErrorBoundary(createMessage),
  ],
};
