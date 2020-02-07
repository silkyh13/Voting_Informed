const socketHandler = require('./sockets.js');
module.exports = server => {
  const io = require('socket.io');
  io.on('connection', (socket) => {
    const server = {
      io,
      socket
    };
    socketHandler(server);
  });
}