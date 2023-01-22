var express = require("express");
var app = express();
var path = require("path");

var body;

function ButtonPress()
{
  alert('textBox');
}

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});


app.listen(3000,);

console.log("Running at Port 3000");
/*app.post(path.join(__dirname+'/middleware'), function(req, res, next){
  textBox = req.body
});*/
