
const MongoClient = require('mongodb').MongoClient; //npm install mongodb@2.2.32
const url = "mongodb://localhost:27017/profiles";
const express = require('express'); //npm install express
const session = require('express-session'); //npm install express-session
const bodyParser = require('body-parser'); //npm install body-parser
const app = express();



app.use(bodyParser.urlencoded({extended:true}))
// set the view engine to ejs


// app.listen(8080);



app.use('/public', express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');


app.get('/', function(req,res){
  res.render('views/pages/home');
})
var db;

MongoClient.connect(url, function(err, database){
 if(err) throw err;
 db = database;
 app.listen(8080);
 console.log("listeneing");
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
