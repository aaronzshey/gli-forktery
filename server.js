/* 
\\  const declarations
*/
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const uri = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASS}@${process.env.MONGO_TARGET}/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
/* 
\\  app.use  declarations
*/
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// code begins here

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("Listening on port 30000");
});

app.post("/posts/input", (req, res) => {
  console.log(req.body);
});


client.connect(err => {
  if (err) return console.error(err);
  const db = client.db(process.env.DB_NAME)

  console.log("Connected to server");
});

//const docs = db.find({}).toArray()
//console.log(docs)
