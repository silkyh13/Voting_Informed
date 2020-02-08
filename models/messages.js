const Message = require("../database/index").Message;

const addMessage = (userId, content, cb) => {

  //specify what we want in the row
    Message.create({
        content,
        userId
    })
    .then(res => {
        cb(null, res);
    })
    .catch(err => {
        cb(err)
    })
}

module.exports = {
    addMessage
}