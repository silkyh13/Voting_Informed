const models = require("../models/user");
//import from models
//register function gets invoked here
const registerUser = (req, res) => {
    models.registerUser(req.body.firstName, req.body.lastName, req.body.email, req.body.password, (err, response) => {
        if(err){
            res.status(500).send(err);
        }
        res.send(response);
    })
}

const getUser = (req, res) => {
    req.user ? res.send(req.user) : res.status(401).send("User not logged in");
}

module.exports = {
    registerUser,
    getUser
}