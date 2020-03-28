const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require("mongodb").MongoClient;
var database;
var db;
var client;

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

/*
MongoClient.connect(database, (err, database) => {
  if (err) {
    return console.log(err);
  } 
    db = client.db("demo-cluster")
    app.listen(3000, () => {
      console.log("Listening on port 3000")
    })
  
});
*/

app.post("/quotes", (req, res) => {
  console.log(req.body);
});
