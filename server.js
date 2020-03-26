const http = require("http");
const express = require("express");

const app = express();

app.listen('3000', function() {
  console.log("Now listening!")
})
app.get("")