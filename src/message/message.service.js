const Message = require("../db/models/messageModel");

function create(message) {
  return Message.create(message);
}

module.exports = {
  create,
};
