const imports = require("./imports")
const app = imports.app
const client = imports.client
const ObjectId = imports.ObjectId 
function read() {

client.connect(err => {

    if (err) return console.log(err)
    const mongo = client.db("demo-cluster")
		const col = mongo.collection("samples")
    console.log("Connected to server - READ")
   
    app.get("/posts/search", (req, res) => {
      //console.log(req)

    console.log(req.query)

    
    })

//url encoding test id: 5f66848847ab120145b7fa0b

  app.get("/post/:id", (req, res) => {
    var query = req.params.id
    console.log(query)

    col.find({"_id": ObjectId(query)}).toArray()
    .then(docs => {
      var a = docs[0].title
      var b = encodeURIComponent(a)
      console.log(b)
      res.redirect(`/post/${query}/${b}`)
     //redir to more specific id/title
     
      })
    .catch(e => console.log(e))

  })
  app.get("/post/:id/:title", (req, res) => {
    console.log(req.params)
    var id = req.params.id
    var title = req.params.title
    console.log(title)
    
    //var title = decodeURIComponent(a)
    var search = {
      "_id": ObjectId(id),
      title: title
    } 

  col.find(search).toArray()
  .then(docs => {
    var post = docs[0]
    res.render("uniquepost.ejs", {post}) //render doc
    })


    /*
    var search = /\-/g //global search dash
    var title = req.params.title.replace(search, " ")
    console.log(title)
*/

  })



}) 
}
//:asdf -> req.params.asdf 
module.exports = read

/*
var search = /\-/g
var test = "a-string-with-dashes"
var result = test.replace(search, " ")
*/