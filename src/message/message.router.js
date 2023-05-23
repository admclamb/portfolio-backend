const router = require("express").Router();
const controller = require("./message.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").post(controller.createMessage).all(methodNotAllowed);

module.exports = router;
