const router = require("express").Router();
const message = require("../controllers/messages.js");

router.get("/message/:startId/:endId", message.getMessages);
router.post("/message", message.addMessage);

module.exports = router;