const http = require('http');
const path = require('path');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');

  socket.emit('newMessage', {
    from: 'ben@example.com',
    text: 'here is the message from the server',
    createdAt: new Date()
  });

  socket.on('createMessage', (message) => {
    message.createdAt = new Date()
    console.log('create message: ', message);
  });

  socket.on('disconnect', (socket) => {
    console.log('user has been disconnected');
  });
});


server.listen(port, () => {
  console.log(`Server is up on ${port}`);
})
