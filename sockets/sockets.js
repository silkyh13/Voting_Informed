const chatHandler = require('../socketHandlers/chatHandler.js');

module.exports = (server) => {
  server.socket.on('chat-message', (message) => {
    chatHandler.onChatMessage(server,message)
  })
};