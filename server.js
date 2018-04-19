var express = require('express');
var app = express();


app.get('/add', function(req,res){
  var x = req.query.x;
  var y = req.query.y;
  app.use(express.static('public'))

})
app.listen(8080);       


const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/users";
const express = require('express');
const app = express();
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))

var db;

MongoClient.connect(url, function(err, database){
 if(err) throw err;
 db = database;
 app.listen(8080);
});

app.get('/all', function(req, res) {
 db.collection('users').find().toArray(function(err, result) {
 if (err) throw err;
 var output = "<h1>All the users</h1>";
 for (var i = 0; i < result.length; i++) {
 output += "<div>"
 output += "<h3>" + result[i].name + "</h3>"
 output += "<p>" + result[i].quote + "</p>"
 output += "</div>"
 }
 res.send(output);
 });
});


const bodyParser = require ('body-parser')


app.post('/addUser', function (req, res) {

var user = {
  "email" : req.body.email,
  "password": req.body.password,
  "name" : {"first":req.body.first, "last":req.body.last,
  "items":{}
}

};

 db.collection('users').save(user, function(err, result) {
 if (err) throw err;
 console.log('saved to database')
 res.redirect('/loginPage')
 })
})
