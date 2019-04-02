// Create WebSocket connection.
const socket = new WebSocket(window.location.origin.replace(/^https/, 'wss'));

// Connection opened
socket.addEventListener('open', function (event) {
  socket.send('Hello Server!');
});



// Listen for messages
socket.addEventListener('message', function (event) {
  let data;
  try {
    data = JSON.parse(event.data);
  } catch (e) {
    console.warn('invalid message from the server!');
    return;
  }
  console.log(data);
});