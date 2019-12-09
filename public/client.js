/* global FriendlyWebSocket */
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
