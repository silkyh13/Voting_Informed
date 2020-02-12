const messages = require("./models/messages.js");
const user = require("./models/user.js");
const casual = require('casual');

function rando(start, stop) {
  return start + Math.round(Math.random() * (stop - start));
}

const seed = () => {
  let firstname, lastname, eMail, pass;
  for (let i = 0; i < 4; i++) {
    firstname = casual.first_name;
    lastname = casual.last_name;
    eMail = casual.email;
    pass = casual.password;
    user.registerUser(firstname, lastname, eMail, pass, (err, response) => {
      console.log('did it for users')
    })
  }
  let id;
  let message;
  for (let i = 0; i < 15; i++) {
    id = rando(0, 4);
    message = casual.sentences(rando(2, 5));
    messages.addMessage(id, message, (err, response) => {
      console.log('did it for messages')
    })
  }
}
seed();
// const seedMessages = () => {
//   let user;
//   let message;
//   for (let i = 0; i < 15; i++) {
//     user = rando(0, 4);
//     message = casual.sentences(rando(2, 5));
//     messages.addMessage(user, message, (err, response) => {
//       console.log('did it for messages')
//     })
//   }
// }

// seedUsers();
// seedMessages();
