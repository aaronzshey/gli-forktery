const http = require('http');
const express = require('express');
const ws = require('ws');

const app = express();

// we need to create our own http server so express and ws can share it.
const server = http.createServer(app);
// pass the created server to ws
const wss = new ws.Server({ server });

// we're using an ES2015 Set to keep track of every client that's connected
let sockets = new Set();

// based on https://www.npmjs.com/package/ws#simple-server
wss.on('connection', function connection(ws) {
  sockets.add(ws);

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
  
  ws.on('close', function () {
    sockets.delete(ws);
    // tell everyone a client left
    update();
  });
  
  // tell everyone a client joined
  update();
});

function update() {
  // send an updated client count to every open socket.
  sockets.forEach(ws => ws.send(JSON.stringify({
    type: 'count',
    count: sockets.size
  })));
}
 
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests!
const listener = server.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
