const imports = require("./imports")
const app = imports.app

function serve() {
  app.get("/", (req, res) => {
    res.render("home");
  });

  app.get("/login", (req, res) => {
    res.render('login')
  })
  
  app.listen(4000, () => {
    console.log("Listening on port 4000");
  });

  app.get("/search", (req, res) => {
    res.render("index2")
  })
}
/*
function notfound() {
    app.get("*", (req, res) => {
    var asdf = req.url;
    res.send(`404 Error: Requested path ${req.url} does not exist`)
    }) 
}


*/





 
module.exports =  serve 