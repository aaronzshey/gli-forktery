const http = require("http");
const express = require("express");

const app = express();

app.listen("3000", () => {
  console.log("Now listening!");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
});


app.post("/quotes", (req, res) => {
  console.log("Posted");
});
