const router = require("express").Router();
const message = require("../controllers/messages.js");

router.get("/message", message.getMessages);
router.post("/message", message.addMessage);

module.exports = router;