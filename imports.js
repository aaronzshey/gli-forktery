const bcrypt = require('bcrypt');
const moment = require('moment');
moment().format()
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

module.exports = {app, client, ObjectId, bcrypt}

/* 
const imports = require("./imports")
const app = imports.app
const client = imports.client
const bcrypt = imports.bcrypt
const ObjectId = imports.ObjectId 
 above, ObjectId needs a string as query 

client.connect(err => {
    if (err) return console.log(err)
    const mongo = client.db("demo-cluster")
		const col = mongo.collection("samples")
    const secure = mongo.collection('secure')
    console.log("Connected to server")
})

*/