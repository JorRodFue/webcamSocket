/* eslint-disable indent */
/* eslint-disable new-cap */

var path = require('path');

var express = require('express');
var app = express();

const server = app.listen(3000);
const io = require('socket.io').listen(server);

app.use(require('./routes/WebcamAPP.routes.js'));
app.use(express.static(path.join(__dirname, '/public')));

io.on('connection', socket => {
    socket.on('stream', image => {
        socket.broadcast.emit('stream', image);
    });
});

module.exports = app;
