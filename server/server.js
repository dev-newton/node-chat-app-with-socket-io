const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message')
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT ||3000;
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));


//connect event handler
io.on('connection', (socket) => {
    console.log('New user connected');

    //emit new message
    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat App'));

    socket.broadcast.emit('newMessage',  generateMessage('Admin', 'New User Joined'));

    //custom event handler to listen for newMesages, and emit  to everyone
    socket.on('createMessage', (message, callback) => {
        console.log('createMessage', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback('This is from the server');
    });

    // disconnect event handler
    socket.on('disconnect', () => {
        console.log('Client disconnected')
    });

});

server.listen(port, (req, res) => {
    console.log(`Server is now listening on port ${port}`);
});