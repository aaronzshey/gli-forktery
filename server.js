const http = require('http');

const express = require('express');
const ws = require('ws');

const app = express();

const server = http.createServer(app);
const wss = new ws.Server({ server });

let sockets = new Set();

// based on https://www.npmjs.com/package/ws#simple-server
wss.on('connection', function connection(ws) {
  sockets.add(ws);

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
  
  ws.on('close', function () {
    sockets.delete(ws);
    update();
  });
  
  update();
});

function update() {
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

// listen for requests :)
const listener = server.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
