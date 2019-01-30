// Create WebSocket connection.
const socket = new WebSocket(window.location.origin.replace(/^https/, 'wss'));

// Connection opened
socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});