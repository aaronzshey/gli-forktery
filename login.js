var imports = require("./imports")
const app = imports.app
const client = imports.client
const bcrypt = imports.bcrypt

function login() {
	client.connect(err => {
      const db = client.db(process.env.DB_NAME)
  const secure = db.collection("secure-area")
		
    app.get("/posts/login", (req, res) => {
			//console.log(req.query)
			var inputuser = req.query.username
			var inputpass = req.query.password
			//console.log(inputpass)
			secure.find({username: inputuser}).toArray().then(docs => {
				console.log(docs)
				var foundpass = docs[0].password
				console.log(foundpass)
				bcrypt.compare(inputpass, foundpass, (err, result) => {
					console.log(result)
					res.render("landing", {result: result})
				})//end compare
			})//end .then
		})//end app.get
	})//end client.connect
}

module.exports = login