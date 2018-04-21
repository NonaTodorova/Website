
const MongoClient = require('mongodb').MongoClient; //npm install mongodb@2.2.32
const url = "mongodb://localhost:27017/users";
const express = require('express'); //npm install express
const session = require('express-session'); //npm install express-session
const bodyParser = require('body-parser'); //npm install body-parser
const app = express();
const Quagga = require('quagga').default;


app.use(session({secret : "example"}));


    app.use(bodyParser.urlencoded({extended:true}))


// set the view engine to ejs
  app.set('view engine', 'ejs');
//Tell express where the static files are .
  app.use(express.static('public'));


// use res.render to load up an ejs view file

  app.get('/', function(req,res){

    res.render('pages/home');
  })

  // app.get('/fridge',function(req,res){
  //   res.render('pages/fridge');
  // })

  app.get('/login',function(req,res){
    res.render('pages/login');
  })

  app.get('/register',function(req,res){
    res.render('pages/register');
  })



  app.get('/profilePage',function(req,res){
    if(!req.session.loggedin){res.redirect('/login');return;}

      //var uname = req.query.username;

      db.collection('people').findOne({
        "email": req.session.user.email
      }, function(err, result) {
        if (err) throw err;

        res.render('pages/profilePage', {
          user: result
        })
      });

  })


  pp.get('/fridge',function(req,res){
    if(!req.session.loggedin){res.redirect('/login');return;}

      //var uname = req.query.username;

      db.collection('people').findOne({
        "email": req.session.user.email
      }, function(err, result) {
        if (err) throw err;

        res.render('pages/fridge', {
          user: result
        })
      });

  })



// declaring database
  var db;

  MongoClient.connect(url, function(err, database){
    if(err) throw err;
    db = database;
    app.listen(8080);
    console.log("listening");
  });


//adding a user to the database

app.post('/addUser', function (req, res) {

//if(!req.session.loggedin){res.redirect('/login');return;}

var person = {
  "email" : req.body.email,
  "password": req.body.password,
  "name" : req.body.name,
  "items":{}
}

db.collection("people").save(person, function(err,result){
  if(err) throw err;
  res.redirect("/login")
})

});

//log out

app.get('/logout', function(req, res) {
  req.session.loggedin = false;
  req.session.destroy();
  res.redirect('/');
});

//login
//sessions



app.post('/loggingIn', function(req,res){
  console.log(JSON.stringify(req.body))
  var userName = req.body.email;
  var passw = req.body.password;

  db.collection('people').findOne({"email":userName},function(err,result){
    if (err) throw err;
    if (!result){res.redirect('/login');return}
    if(result.password == passw) {
      req.session.loggedin = true;
      req.session.user = result;
      res.redirect('/profilePage')
  }
    else{res.redirect('/login')}
  });
});








// app.post('/addUser', function (req, res) {
//
// var user = {
//   "email" : req.body.email,
//   "password": req.body.password,
//   "name" : {"first":req.body.first, "last":req.body.last,
//   "items":{}
// }
//
// };
//
//  db.collection('users').save(user, function(err, result) {
//  if (err) throw err;
//  console.log('saved to database')
//  res.redirect('/loginPage')
//  })
// })
