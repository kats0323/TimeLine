const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const { addUser, removeUser, getUser, getUserInRoom } = require('./users.js');
const Port = process.env.Port || 5000;

const router = require('./router');

const app = express();

const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    socket.on('Join',({name,room}, callback) => {
        const {error, user} = addUser( {id: socket.id, name, room});

        if(error) return callback(error)

        socket.emit('message', {user: 'admin', text: `${user.name}, Welcome ${user.room}`});
        socket.broadcast.to(user.room).emit('message', {user:'admin', text:`${user.name} has joined`})

        socket.join(user.room);


        callback();
    })

    socket.on('sendMessage', (message,callback) => {
        
        const user = getUser(socket.id);
        console.log(user.room)
        io.to(user.name).emit('message',{user: user.name, text: message})

        callback();
    });

    socket.on('disconnect', () => {
        console.log('Disconnected')
    })
});

app.use(router);

server.listen(Port, () => console.log(`Server has started on Port ${Port}`))