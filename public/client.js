// Create WebSocket connection.
function openSocket(messageHandler) {
  console.log('connecting to server...');
  // replace the 'https' in the url with the secure websocket protocol.
  let url = window.location.origin.replace(/^https/, 'wss');
  const socket = new WebSocket(url);
  
  // Connection opened
  socket.addEventListener('open', function (event) {
    console.log('connected!');
    // this isn't necessary, but it's polite to say hi!
    socket.send('Hello Server!');
  });

  socket.addEventListener('close', function (event) {
    console.log('disconnected');
    // the server went away, try re-connecting in 5 seconds.
    setTimeout(openSocket, 2000);
  });

  // Listen for messages
  socket.addEventListener('message', function (event) {
    let data;
    try {
      // this example expects every message to be in JSON format.
      data = JSON.parse(event.data);
      messageHandler(data);
    } catch (e) {
      console.warn('invalid message from the server!');
      return;
    }
  });
}

function onMessage(data) {
  console.log('message:', data);
  // if it's a message about the client count, update the elements
  if (data.type === 'count') {
    document.querySelector('.count').innerText = data.count;
  }
}

// open a connection when the script is loaded
openSocket(onMessage);