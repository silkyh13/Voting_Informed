const models = require("../models/messages.js");
//creates the addMessage function
const addMessage = (req, res) => {
    models.addMessage(req.user.id, req.body.content, (err, response) => {
        if(err){
            res.status(500).send(err);
        }
        res.send(response);
    })
}

module.exports = {
    addMessage
}