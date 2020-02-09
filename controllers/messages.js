const models = require("../models/messages.js");
//creates the addMessage function

//post function for creating messages
const addMessage = (req, res) => {
    models.addMessage(req.user.id, req.body.content, (err, response) => {
        if(err){
            res.status(500).send(err);
        }
        res.send(response);
    })
}


const getMessages = (req, res) => {
    models.getMessages(req.params.startId, req.params.endId, (err, response) => {
        if(err){
            res.status(500).send(err);
        }
    res.send(response);
    })
}

module.exports = {
    addMessage,
    getMessages
}