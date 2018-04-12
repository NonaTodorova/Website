var express = require('express');
var app = express();


app.get('add', function(req,res){
  var x = req.query.x;
  var y = req.query.y;
  app.use(express.static('public'))

})
app.listen(8080);
