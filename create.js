var imports = require("./imports")
const app = imports.app
const client = imports.client
const ObjectId = imports.ObjectId 

function create() {
  client.connect(err => {
    if (err) return console.log(err)
    const mongo = client.db("demo-cluster")
		const col = mongo.collection("samples")
    console.log("Connected to server - CREATE")
  })
}

module.exports = create