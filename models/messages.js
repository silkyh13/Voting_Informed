const Message = require("../database/index").Message;
const Op = require("sequelize").Op;//$between

//basic insertion for message table
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

//sequelize equivalent to select * from messages where id between x,y --note: kinda pseudo-code with the sql
const getMessages = (startId, endId, cb) => {
    Message.findAll({
        where: {
            id: {
                [Op.between]: [startId, endId]
            }
        }
    })
    .then(res => {
        cb(null, res);
    })
    .catch(err => {
        cb(err);
    })
}

module.exports = {
    addMessage,
    getMessages
}