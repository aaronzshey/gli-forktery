const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require("mongodb").MongoClient;
var database;

app.use(bodyParser.urlencoded({ extended: true }));

var listener = app.listen("8080", function() {
  console.log("Your app is listening on port " + listener.address().port);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

var db;
const uri = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASS}@${process.env.MONGO_TARGET}/test?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

client.connect(err => {
  if (err) {
    return console.log(err);
    db = client.db(process.env.DB_NAME);
    const collection = client.db("test").collection("devices");
    client.close;
    app.listen("3000", () => {
      console.log("Listening on port 3000");
    });
  }
});

app.post("/quotes", (req, res) => {
  console.log(req.body);
});

/*
mongodb+srv://mongoGod:mongopass!@ demo-cluster-dctcz.mongodb.net/test ?retryWrites=true&w=majority 
mongodb://[dbuser:dbpassword@]host:port/dbname
*/
console.log("start");
