const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require("mongodb").MongoClient;
app.set("view engine", "ejs")
var database;

app.use(bodyParser.urlencoded({ extended: true }));

var listener = app.listen("8080", () => {
  console.log("Your app is listening on port " + listener.address().port);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

var db;
const uri = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASS}@${process.env.MONGO_TARGET}/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

client.connect(err => {
  if (err) return console.log(err);

  db = client.db(process.env.DB_NAME);
  app.listen("3000", () => {
    console.log("Listening on port 3000");
  });
});

app.post("/quotes", (req, res) => {
  db.collection("samples").insertOne(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log(`saved to database ${process.env.DB_NAME}`);
    res.redirect("/");
  });
  console.log(req.body);
});

app.get("/", (req, res) => {
  
  var cursor = db
    .collection("samples")
    .find()
    .toArray((err, results) => {
      console.log(results)
      
    });
});



console.log("start");
