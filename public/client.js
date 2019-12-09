class FriendlyWebSocket {
  constructor({ path = "/" } = {}) {
    this.path = path;
    this.connect();
    this.connected = false;
    this.messageHandlers = new Set();
  }

  connect() {
    let url;
    if (location.protocol === 'https:') {
      url = 'ws://' + location.host + this.path;
    } else {
      url = 'ws://' + location.host + this.path;
    }
    = window.location.origin.replace(/^https/, "wss") + this.path;
    console.log(url);
    this.socket = new WebSocket(url);

    // Connection opened
    this.socket.addEventListener("open", event => {
      console.log("connected!");
      this.connected = true;
      // this isn't necessary, but it's polite to say hi!
      this.socket.send("Hello Server!");
    });

    this.socket.addEventListener("close", event => {
      console.log("disconnected");
      this.connected = false;
      // the server went away, try re-connecting in 5 seconds.
      setTimeout(() => this.connect(), 2000);
    });

    // Listen for messages
    this.socket.addEventListener("message", event => {
      // tell the listeners about it
      this.messageHandlers.forEach(handler => {
        // don't let one listener spoil the batch
        try {
          handler(event.data);
        } catch (e) {
          console.warn("error in message handler", e);
        }
      });
    });
  }

  on(type, handler) {
    if (type === "message") {
      this.messageHandlers.add(handler);
    }
  }

  off(type, handler) {
    if (type === "message") {
      this.messageHandlers.delete(handler);
    }
  }

  send(message) {
    if (this.connected) {
      this.socket.send(message);
    }
  }
}


let s = new FriendlyWebSocket();
s.on("message", data => {
  console.log("message:", data);
  try {
    // this example expects every message to be in JSON format.
    data = JSON.parse(event.data);
  } catch (e) {
    console.warn("invalid message from server", data);
  }
  // if it's a message about the client count, update the elements
  if (data.type === "count") {
    document.querySelector(".count").innerText = data.count;
  }
});
