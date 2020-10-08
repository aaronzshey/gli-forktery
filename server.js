//  const declarations
const bcrypt = require("bcrypt")
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var ObjectId = require('mongodb').ObjectId;
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
 //split up into a bunch of files and add imports.whatever, finish refactoring in general.  move app.login, app,posts into different files. 



client.connect(err => {
  if (err) return console.error(err);

  const db = client.db(process.env.DB_NAME)
  const col = db.collection("samples")
  const secure = db.collection("secure-area")


  // code begins here



  app.post("/posts/input", (req, res) => {
    var title = req.body.title.trim()
    var content = req.body.body.trim()
    console.log(req)
    if (title == "" || content == "") {
      res.render('oopsy')
    } else {
      var post = { title: title, body: content, dateCreated = Date.now() };
      col.insertOne(post)
        .then(_ => console.log(post))
        .then(_ => res.render("input", { post }))
    }
  });

  app.get("/posts/search", (req, res) => {
    var r = req.body
    console.log(r)
    console.log(r.select)
    var key = r.select
    var query = r.search
    if (key == "ID") {
      col.find({ "_id": ObjectId(query) }).toArray()
        .then(docs => console.log(docs))
    } else {
      col.find({ key: query })
    }
    //console.log(t.slice(21, t.length))
    //console.log(r.search) //body obj derived from form name
    //
    //  col.find({ title: query }).toArray()
    //    .then(docs => {
    //      docs ? res.render("results", { docs: docs }) //: console.log('Docs is undefined')
    //  });
  })

  //need to reject empty inputs
  app.get("/posts/register", (req, res) => {
    var user = req.query.username
    var pwd = req.query.password

    bcrypt.hash(pwd, 10, (err, hash) => {
      var cred = { username: user, password: hash }
      secure.insertOne(cred).then(
        _ => res.render("registered", { cred }))
    })

  })

  col.find({ "_id": ObjectId("5ef440ebd405c101d247f78c") }).toArray()
    .then(docs => console.log(docs))

  secure.find({ username: "Cogman" }).toArray()
    .then(docs => {
      var pass = docs[0].password
      console.log(pass)
      bcrypt.compare("password", pass, (err, result) => {
        console.log(result)
      })
    })

  app.get("/posts/login", (req, res) => {
    //var inputuser = req.query.logname
   // var inputpass = req.query.logpass

    console.log(req.query)
    //console.log(inputpass)
    /*
    secure.find({ username: inputuser }).toArray()
      .then(docs => {
        console.log(docs)
        var foundpass = docs[0].password
        console.log(foundpass)

        bcrypt.compare(inputpass, foundpass, (err, result) => {
          console.log(result)
          res.render("landing", {result: result})
        })
      })
      */

  })

  app.get("/posts/:id", (req,res) => {
    col.find({ "_id": ObjectId(req.params.id)}).toArray()
    //.then(x => console.log(x[0]))
    .then(x => {
    var post = x[0]
    console.log(post)
    res.render("uniquepost", {post}) 
    })
  })
console.log("Connected to server");
//is client accessible everywhere?
})


// docs ? 

//reformat search query to originate from search form , add styling and also add document creation form. 




