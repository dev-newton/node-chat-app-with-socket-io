var socket = io();

//connect event handler 
socket.on('connect', function () {
    console.log('Connected to server');
});

//disconnect event handler
socket.on('disconnect', function ()  {
    console.log('Disconnected from server');
});

//custom event handler to listen for new Message
socket.on('newMessage', function (message) {
    console.log('New Message', message);
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    jQuery('#messages').append(li);
 });

 jQuery('#message-form').on('submit', function (e) {
    e.preventDefault();
    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function () {

    })
 });
