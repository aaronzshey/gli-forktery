const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require("mongodb").MongoClient;
var database;
let db;
let client;

app.use(bodyParser.urlencoded({ extended: true }));

var listener = app.listen("8080", function() {
  console.log("Your app is listening on port " + listener.address().port);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

/*
MongoClient.connect(
  "mongodb+srv://mongoGod:mongopass%21@demo-cluster-dctcz.mongodb.net/test?retryWrites=true&w=majority ",
  (err, database) => {
    if (err) {
      return console.log(err);
    }
    db = client.db("demo-cluster");
    //db is not defined
    app.listen(3000, () => {
      console.log("Listening on port 3000");
    });
  }
);

app.post("/quotes", (req, res) => {
  console.log(req.body);
}); 

/*
mongodb+srv://mongoGod:mongopass!@ demo-cluster-dctcz.mongodb.net/test ?retryWrites=true&w=majority 
mongodb://[dbuser:dbpassword@]host:port/dbname
*/
console.log("start")