const Message = require("../database/index").Message;
const Op = require("sequelize").Op;//$between
const User = require('../database/index').User
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
const getMessages = async (cb) => {
    const messages = await Message.findAll({

        limit: 30,
        order: [['createdAt', 'DESC']]
    });
    //formatted return user objec
    // Promise.all([promise1, promise2, promise3]) -> promise.then(res => [resPromise1, etc])
    const formatted = async () => Promise.all(messages.map(message => {
        return User.findAll({
            where: {
                id: message.userId
            }
        });
    }))
    //res => array of user objects
    formatted().then(res => {
        const formatted = messages.map((message, index) => {
            return {
                message: message.content,
                createdAt: message.createdAt,
                user: {
                    id: res[index][0].id,
                    firstName: res[index][0].firstName,
                    lastName: res[index][0].lastName,
                    email: res[index][0].email
                }
            }
        })
        cb(null, formatted);
    })
}

module.exports = {
    addMessage,
    getMessages
}