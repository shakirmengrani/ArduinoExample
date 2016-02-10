var express = require("express");
var r = express.Router();
r.get("/",function(req,res){
  res.render("index/view",{title:"Hello Arduino"});
});
module.exports = r
