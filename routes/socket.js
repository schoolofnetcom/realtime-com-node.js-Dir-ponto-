module.exports = function(socket, io) {
    socket.emit('init', {
        name: 'School of net'
    });

    socket.on('Event::PostCreate', function(data) {
        socket.broadcast.emit('Event::PostCreated', data);
    });
};

