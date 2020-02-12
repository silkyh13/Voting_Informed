const messages = require("./models/messages.js");
const user = require("./models/user.js");
const casual = require('casual');

function rando(start, stop) {
  return start + Math.round(Math.random() * (stop - start));
}

const seedUsers = () => {
  let firstname, lastname, eMail, pass;
  for (let i = 0; i < 4; i++) {
    firstname = casual.first_name;
    lastname = casual.last_name;
    eMail = casual.email;
    pass = casual.password;
    user.registerUser(firstname, lastname, eMail, pass, (err, response) => {
      console.log('did it')
    })
  }
}
const seedMessages = () => {
  let user;
  let message;
  for (let i = 0; i < 15; i++) {
    user = rando(1, 4);
    message = casual.sentences(rando(2, 5));
    messages.addMessage(user, message, (err, response) => {
      console.log('did it')
    })
  }
}

seedMessages();
seedUsers();