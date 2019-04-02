// Create WebSocket connection.
function openSocket() {
  console.log('connecting to server...');
  // replace the 'https' in the url with the secure websocket protocol.
  const socket = new WebSocket(window.location.origin.replace(/^https/, 'wss'));
  
  // Connection opened
  socket.addEventListener('open', function (event) {
    console.log('connected!');
    // this isn't necessary, but it's polite to say hi!
    socket.send('Hello Server!');
  });

  socket.addEventListener('close', function (event) {
    console.log('disconnected');
    // the server went away, try re-connecting in a 5 seconds.
    setTimeout(openSocket, 5000);
  });

  // Listen for messages
  socket.addEventListener('message', function (event) {
    let data;
    // this example expects every message to be in JSON format.
    try {
      data = JSON.parse(event.data);
    } catch (e) {
      console.warn('invalid message from the server!');
      return;
    }
    console.log('message:', data);
    if (data.type === 'count') {
      document.querySelector('.count').innerText = data.count;
    }
  });
}

openSocket();