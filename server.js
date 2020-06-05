const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require("mongodb").MongoClient;
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

const uri = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASS}@${process.env.MONGO_TARGET}/test?retryWrites=true&w=majority`;
console.log(uri)

/* 
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


client.connect(err => {
  if (err) return console.error(err);
  console.log("Connected to server");
});
*/

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("Listening on port 30000");
});

app.post("/posts/input", (req, res) => {
  req.body;
  console.log(req.body);
});
