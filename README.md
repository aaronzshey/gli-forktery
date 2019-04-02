# WebSocket Starter App with 'ws'

[`ws` on npm](https://www.npmjs.com/package/ws)

A simple websocket example using the ws node.js library. `ws` integrates with `express` to add a web socket server along side an existing HTTP server.

![a screenshot of this app](https://cdn.glitch.com/749e955d-594b-4f7d-b4a5-41e388f38c85%2FScreen%20Shot%202019-04-01%20at%2022.06.27.png?1554181601536)

# Code

## server.js

* creates a node `http` server
* provides that server to both a standard `express` and `ws.Server`
* listens for a client connection to the WebSocket server:
  * adds new connections to a `Set`
  * sends the number of active connections to all clients in the set
  * sends updates whenever a client connects or disconnects

## public/client.js

* connects to the WebSocket server
* re-connects on error or disconnect
* listens for messages
  * when a message about the number of clients is recieved, updates the UI
  