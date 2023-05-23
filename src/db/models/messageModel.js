const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Message = mongoose.model("Message", MessageSchema);
module.exports = Message;
