const imports = require("./imports")
const app = imports.app
const client = imports.client
const ObjectId = imports.ObjectId

client.connect(err => {
  if (err) return console.log(err)
  const mongo = client.db("demo-cluster")
  const col = mongo.collection("samples")
  console.log("Connected to server - UPDATE")
  
  var now = Date.now
  
    const updateDoc = {
      $set : {
        test: Date.now()
      }
    }
/*
  col.updateMany({}, updateDoc)
  .then(_ => console.log("success"))
  .catch(e => console.log(e))
  //{} passes empty to query to return all docs
*/
  
  col.find({
    "_id": ObjectId("5ef440ebd405c101d247f78c")
  }).toArray()
    .then(docs => {
      console.log(docs)
    })
})
