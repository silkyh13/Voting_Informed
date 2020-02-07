module.exports = {
  onChatMessage: (server, message) => {
    //when message received, [io] emits it to all clients
    server.io.emit('chat-message', message);
  }
};