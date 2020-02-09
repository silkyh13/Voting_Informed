const models = require("../models/messages.js");
const User = require("../")
//creates the addMessage function

//post function for creating messages
const addMessage = (req, res) => {
    models.addMessage(req.user.id, req.body.content, (err, response) => {
        if (err) {
            res.status(500).send(err);
        }
        res.send(response);
    })
}


const getMessages = (req, res) => {
    //response object is what we sent to client
    //request object is what we get back
    models.getMessages((err, messages) => {
        if (err) {
            res.status(500).send(err);
        }
        res.send(messages);
    });
}

module.exports = {
    addMessage,
    getMessages
}