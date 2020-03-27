const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require("mongodb").MongoClient

app.use(bodyParser.urlencoded({extended: true}))
app.listen("3000", () => {
  console.log("Now listening!");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
});


app.post("/quotes", (req, res) => {
  console.log(req.body)
});
