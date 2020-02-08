const router = require("express").Router();
const message = require("../controllers/messages.js");

router.post("/message", message.addMessage);

module.exports = router;